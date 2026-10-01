(function () {
  const createEmitter = () => {
    const handlers = {
      frame: [],
      frameSize: [],
      exit: [],
      stdout: [],
      stderr: [],
    };

    return {
      onFrame(cb) {
        handlers.frame.push(cb);
      },
      onFrameSize(cb) {
        handlers.frameSize.push(cb);
      },
      onExit(cb) {
        handlers.exit.push(cb);
      },
      onStdout(cb) {
        handlers.stdout.push(cb);
      },
      onStderr(cb) {
        handlers.stderr.push(cb);
      },
      emitFrame(rgb, rgba) {
        handlers.frame.forEach((cb) => cb(rgb, rgba));
      },
      emitFrameSize(w, h) {
        handlers.frameSize.forEach((cb) => cb(w, h));
      },
      emitExit(code) {
        handlers.exit.forEach((cb) => cb(code));
      },
      emitStdout(text) {
        handlers.stdout.forEach((cb) => cb(text));
      },
      emitStderr(text) {
        handlers.stderr.forEach((cb) => cb(text));
      },
    };
  };

  function dosboxXWorker(bundles, options) {
    const emitter = createEmitter();
    const workerUrl = (window.emulators.pathPrefix || "") + "wdosbox-x.js";
    const worker = new Worker(workerUrl);
    const sessionId = String(Date.now() + Math.floor(Math.random() * 100000));
    let resolveClient;
    let rejectClient;
    const clientPromise = new Promise((resolve, reject) => {
      resolveClient = resolve;
      rejectClient = reject;
    });
    let clientResolved = false;

    let frameWidth = 0;
    let frameHeight = 0;
    let frameRgb = null;
    let pendingCustomCallbacks = [];
    let pendingPersist = null;
    let pendingChunkResolve = null;
    let pendingChunkName = null;

    const sendMessage = (name, props, transfer) => {
      const payloadProps = props ? { ...props } : {};
      payloadProps.sessionId = sessionId;
      const payload = { name, props: payloadProps };
      if (transfer && transfer.length) {
        worker.postMessage(payload, transfer);
      } else {
        worker.postMessage(payload);
      }
    };

    const sendChunk = (chunk, transfer) => {
      return new Promise((resolve) => {
        pendingChunkResolve = resolve;
        pendingChunkName = chunk.name;
        sendMessage("wc-send-data-chunk", { chunk }, transfer);
      });
    };

    const sendBundles = async () => {
      for (let i = 0; i < bundles.length; i += 1) {
        const bundle = bundles[i];
        const data = bundle instanceof Uint8Array ? bundle : new Uint8Array(bundle);
        const name = String(i);
        await sendChunk({ type: "bundle", name, data: data.buffer }, [data.buffer]);
        await sendChunk({ type: "bundle", name, data: null });
      }
    };

    const client = {
      events() {
        return emitter;
      },
      width() {
        return frameWidth;
      },
      height() {
        return frameHeight;
      },
      message(command, data, callback) {
        if (callback) {
          pendingCustomCallbacks.push(callback);
        }
        sendMessage("wc-custom", { command, data });
      },
      sendKeyEvent(key, pressed) {
        sendMessage("wc-add-key", { key, pressed, timeMs: Math.floor(performance.now()) });
      },
      sendMouseMotion(x, y) {
        sendMessage("wc-mouse-move", { x, y, relative: false, timeMs: Math.floor(performance.now()) });
      },
      sendMouseRelativeMotion(dx, dy) {
        sendMessage("wc-mouse-move", { x: dx, y: dy, relative: true, timeMs: Math.floor(performance.now()) });
      },
      sendMouseButton(button, pressed) {
        sendMessage("wc-mouse-button", { button, pressed, timeMs: Math.floor(performance.now()) });
      },
      pause() {
        sendMessage("wc-pause", {});
      },
      resume() {
        sendMessage("wc-resume", {});
      },
      mute() {
        sendMessage("wc-mute", {});
      },
      unmute() {
        sendMessage("wc-unmute", {});
      },
      persist() {
        if (pendingPersist) {
          return pendingPersist.promise;
        }
        let resolvePersist;
        const promise = new Promise((resolve) => {
          resolvePersist = resolve;
        });
        pendingPersist = { promise, resolve: resolvePersist };
        sendMessage("wc-pack-fs-to-bundle", { onlyChanges: true });
        return promise;
      },
    };

    worker.onmessage = (event) => {
      const data = event.data;
      if (!data || !data.name) {
        return;
      }

      const name = data.name;
      const props = data.props || {};

      if (name === "ws-ready") {
        sendBundles().then(() => {
          const canvas = options.canvas;
          const transfer = canvas ? [canvas] : [];
          sendMessage(
            "wc-run",
            {
              name: options.name,
              token: "",
              canvas: canvas,
            },
            transfer
          );
        }).catch((error) => {
          if (!clientResolved && rejectClient) {
            rejectClient(error);
          }
        });
        return;
      }

      if (name === "ws-server-ready") {
        if (!clientResolved) {
          clientResolved = true;
          resolveClient(client);
        }
        return;
      }

      if (name === "ws-send-data-chunk") {
        if (pendingChunkResolve && props.chunk && props.chunk.name === pendingChunkName) {
          const resolve = pendingChunkResolve;
          pendingChunkResolve = null;
          pendingChunkName = null;
          resolve();
        }
        return;
      }

      if (name === "ws-frame-set-size") {
        frameWidth = props.width;
        frameHeight = props.height;
        frameRgb = new Uint8Array(frameWidth * frameHeight * 3);
        emitter.emitFrameSize(frameWidth, frameHeight);
        return;
      }

      if (name === "ws-update-lines") {
        const lines = props.lines || [];
        if (frameRgb && frameWidth) {
          for (const line of lines) {
            const offset = line.start * frameWidth * 3;
            frameRgb.set(line.heapu8, offset);
          }
          emitter.emitFrame(frameRgb, null);
        }
        return;
      }

      if (name === "ws-extract-progress") {
        if (typeof options.onExtractProgress === "function") {
          options.onExtractProgress(props.index, props.file, props.extracted, props.count);
        }
        return;
      }

      if (name === "ws-custom-ready") {
        if (pendingCustomCallbacks.length) {
          const cb = pendingCustomCallbacks.shift();
          if (cb) cb();
        }
        return;
      }

      if (name === "ws-sync-sleep") {
        sendMessage("wc-sync-sleep", {});
        return;
      }

      if (name === "ws-persist") {
        if (pendingPersist) {
          const resolve = pendingPersist.resolve;
          pendingPersist = null;
          if (props.bundle) {
            resolve(new Uint8Array(props.bundle));
          } else {
            resolve(null);
          }
        }
        return;
      }

      if (name === "ws-exit") {
        emitter.emitExit(props.code || 0);
        return;
      }

      if (name === "ws-stdout") {
        emitter.emitStdout(props.message || "");
        return;
      }

      if (name === "ws-err") {
        emitter.emitStderr(props.message || "");
        return;
      }
    };

    worker.onerror = (event) => {
      if (!clientResolved && rejectClient) {
        rejectClient(event.error || new Error(event.message || "Worker error"));
      }
    };

    worker.postMessage({ name: "wc-install", props: { sessionId } });

    return clientPromise;
  }

  window.emulators = {
    pathPrefix: "",
    dosboxXWorker,
  };
})();
