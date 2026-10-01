var ci;

class HelperX {
    #idb
    #settings
    #offscreenCanvasTransfered
    #offscreenCanvas
    #fullscreen
    #canvas
    #gameWidth
    #gameHeight
    #paused
    #muted
    #keyBuffer = new Array(256);
    #gameControllerBasicMapping
    #gameControllerId
    #gameControllerIndex

    constructor(bundle, canvas, settings, events) {

        this.#canvas = canvas;
        this.#fullscreen = false;
        this.#paused = false;
        this.#muted = false;
        this.#settings = settings;
        this.#gameControllerBasicMapping = null;
        this.#offscreenCanvasTransfered = false;
        this.#idb = new IDB();


        (async () => {
            //bundle
            var self = this;
            var idbSuccess = await this.#idb.Open();
            var bundles = new Array;
            bundles.push(bundle);
            if (settings.save == 0) {//cloud
                function downloadCloudFile() {
                    return new Promise((resolve) => {
                        var jqxhr = $.ajax({ url: "/api/cloud/aws/getdownloadlink?gameid=" + settings.name })
                            .done(function (result) {
                                if (result.status == true) {
                                    //download
                                    axios.get(result.url, {
                                        responseType: 'arraybuffer',
                                        timeout: 60000*30,
                                        onDownloadProgress: (progressEvent) => {
                                            events.onExtractProgress(12, "", progressEvent.loaded, progressEvent.total);
                                        }
                                    }).then(response => {
                                        if (response.status == 200) {
                                            resolve(response.data);
                                        }
                                        else
                                            resolve(null);
                                    }).catch(err => {
                                        console.log(err);
                                        resolve(null);
                                    });
                                }
                                else {
                                    //error upload link not generated,non gold member or other error
                                    resolve(null);
                                }
                            }).fail(function (jqXHR, textStatus) {
                                resolve(null);
                            });
                    });
                }
                var file = await downloadCloudFile();
                if (file !== null)
                    bundles.push(new Uint8Array(file));
                file = undefined;
            } else if (settings.save == 1) {//local
                if (idbSuccess) {
                    var result = await this.Load(settings.name);
                    if (result !== null) { bundles.push(result); }
                }
            } else if (settings.save == 2) {
                if (settings.upload !== undefined) {
                    bundles.push(new Uint8Array(await settings.upload.arrayBuffer()));
                }
            }

            //worker webgl
            var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
            //console.log("Safari:", isSafari);
            isSafari = false;
            if (HTMLCanvasElement.prototype.transferControlToOffscreen && isSafari == false) {
                if (this.#offscreenCanvasTransfered == false) {
                    this.#offscreenCanvas = canvas.transferControlToOffscreen();
                    this.#offscreenCanvasTransfered = true;
                }
                else {//clone canvas
                    this.#offscreenCanvas = canvas.transferControlToOffscreen();
                    this.#offscreenCanvasTransfered = true;
                }
            }
            else {
                console.log("webglWorker disabled");
                this.#offscreenCanvas = undefined;
            }

            ci = emulators.dosboxXWorker(bundles, { name: settings.name, canvas: this.#offscreenCanvas, onExtractProgress: events.onExtractProgress,version:settings.version });
            ci.then(client => {
                ci = client;
                window.ci = client;

                const applyCanvasSize = () => {
                    if (!this.#gameWidth || !this.#gameHeight) {
                        return;
                    }
                    if (!canvas.parentElement) {
                        return;
                    }

                    const aspect = this.#gameWidth / this.#gameHeight;

                    let width = canvas.parentElement.clientWidth;
                    let height = canvas.parentElement.clientWidth / aspect;

                    if (height > canvas.parentElement.clientHeight) {
                        height = canvas.parentElement.clientHeight;
                        width = canvas.parentElement.clientHeight * aspect;
                    }

                    canvas.style.position = "relative";
                    canvas.style.top = (canvas.parentElement.clientHeight - height) / 2 + "px";
                    canvas.style.left = (canvas.parentElement.clientWidth - width) / 2 + "px";
                    canvas.style.width = width + "px";
                    canvas.style.height = height + "px";
                    this.Message("ddyx-canvas-resize", { width: canvas.clientWidth, height: canvas.clientHeight, dpr: window.devicePixelRatio });
                };

                ci.events().onFrameSize((w, h) => {
                    this.#gameWidth = w;
                    this.#gameHeight = h;
                    events.onFrameSize(w, h)
                    applyCanvasSize();
                });

                if (this.#offscreenCanvas === undefined) {
                    const gl = canvas.getContext("webgl");
                    webGl({
                        canvas,
                        addOnResize: () => { },
                    }, ci);
                }

                audioNode(ci);
                var pointerLocked = false;
                canvas.addEventListener("click", async () => {
                    await canvas.requestPointerLock({
                        unadjustedMovement: true
                    });
                });

                document.onpointerlockchange = (event) => {
                    if (document.pointerLockElement) {
                        document.body.style.overflow = 'hidden';
                        pointerLocked = true;
                        canvas.scrollIntoView({
                            behavior: 'auto',
                            block: 'center',
                            inline: 'center'
                        });
                    }
                    else {
                        document.body.style.overflow = 'unset';
                        pointerLocked = false;
                    }
                };

                const resizeObserver = new ResizeObserver(() => {
                    applyCanvasSize();
                });
                resizeObserver.observe(canvas.parentElement);

                //window.addEventListener("resize", (e) => {
                //    const aspect = this.#gameWidth / this.#gameHeight;

                //    let width = canvas.parentElement.clientWidth;
                //    let height = canvas.parentElement.clientWidth / aspect;

                //    if (height > canvas.parentElement.clientHeight) {
                //        height = canvas.parentElement.clientHeight;
                //        width = canvas.parentElement.clientHeight * aspect;
                //    }

                //    canvas.style.position = "relative";
                //    canvas.style.top = (canvas.parentElement.clientHeight - height) / 2 + "px";
                //    canvas.style.left = (canvas.parentElement.clientWidth - width) / 2 + "px";
                //    canvas.style.width = width + "px";
                //    canvas.style.height = height + "px";
                //    this.Message("ddyx-canvas-resize", { width: canvas.clientWidth, height: canvas.clientHeight, dpr: window.devicePixelRatio });
                //});

                window.addEventListener("blur", (e) => {
                    this.#keyBuffer.forEach((item, index) => {
                        if (item == 1)
                            ci.sendKeyEvent(index, false);
                    });
                });
                window.addEventListener("keydown", (e) => {
                    this.#keyBuffer[dosXGetKeyCode(e.code)] = 1;
                    //if (pointerLocked) {
                        ci.sendKeyEvent(dosXGetKeyCode(e.code), true);
                        e.stopPropagation();
                        e.preventDefault();
                    //}
                });
                window.addEventListener("keyup", (e) => {
                    this.#keyBuffer[dosXGetKeyCode(e.code)] = 0;
                    //if (pointerLocked) {
                    ci.sendKeyEvent(dosXGetKeyCode(e.code), false);
                        e.stopPropagation();
                        e.preventDefault();
                    //}
                });
                let x = 50;
                let y = 50;
                canvas.addEventListener("click", (e) => {
                    if (pointerLocked) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
                canvas.addEventListener("mousemove", (e) => {
                    if (pointerLocked) {
                        //x += e.movementX;
                        //y += e.movementY;
                        //ci.sendMouseMotion(
                        //    (x - canvas.offsetLeft) / canvas.width,
                        //    (y - canvas.offsetTop) / canvas.height);
                        ci.sendMouseRelativeMotion(e.movementX * settings.mouseSensitivity, e.movementY * settings.mouseSensitivity);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
                canvas.addEventListener("mousedown", (e) => {
                    if (pointerLocked) {
                        let b = e.button == 2 ? 1 : e.button;
                        ci.sendMouseButton(b, true);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
                canvas.addEventListener("mouseup", (e) => {
                    if (pointerLocked) {
                        let b = e.button == 2 ? 1 : e.button;
                        ci.sendMouseButton(b, false);
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
                canvas.addEventListener("wheel", (e) => {
                    if (pointerLocked) {
                        e.stopPropagation();
                        e.preventDefault();
                    }
                });
                function readGamepadSettings() {
                    self.#gameControllerBasicMapping = JSON.parse(localStorage.getItem('settings_game_controller_basic_mapping'));
                    if (self.#gameControllerBasicMapping === null) {
                        self.#gameControllerBasicMapping = { axes: [0, null, 1, null], buttons: [0, 1, 2, 3] };
                    }
                    self.#gameControllerIndex = localStorage.getItem('settings_game_controller_index');
                    self.#gameControllerId = localStorage.getItem('settings_game_controller_id');
                    self.#gameControllerBasicMapping.targetButton0 = [];
                    self.#gameControllerBasicMapping.targetButton1 = [];
                    self.#gameControllerBasicMapping.targetButton2 = [];
                    self.#gameControllerBasicMapping.targetButton3 = [];
                    self.#gameControllerBasicMapping.targetAxis0 = [];
                    self.#gameControllerBasicMapping.targetAxis1 = [];

                    for (const element of self.#gameControllerBasicMapping.buttons.entries()) {
                        if (element[1] == 0)
                            self.#gameControllerBasicMapping.targetButton0.push(element[0]);
                        if (element[1] == 1)
                            self.#gameControllerBasicMapping.targetButton1.push(element[0]);
                        if (element[1] == 2)
                            self.#gameControllerBasicMapping.targetButton2.push(element[0]);
                        if (element[1] == 3)
                            self.#gameControllerBasicMapping.targetButton3.push(element[0]);
                    }
                    for (const element of self.#gameControllerBasicMapping.axes.entries()) {
                        if (element[1] == 0)
                            self.#gameControllerBasicMapping.targetAxis0.push(element[0]);
                        if (element[1] == 1)
                            self.#gameControllerBasicMapping.targetAxis1.push(element[0]);
                    }
                }
                let gamePadFrame;
                window.addEventListener("focus", (e) => {
                    readGamepadSettings();
                });
                function gamePadLoop() {
                    const gamepads = navigator.getGamepads();
                    if (!gamepads) {
                        return;
                    }
                    var gp = gamepads[0];

                    if (gamepads[self.#gameControllerIndex] && gamepads[self.#gameControllerIndex].id == self.#gameControllerId) {
                        gp = gamepads[self.#gameControllerIndex];
                    }
                    else {
                        var temp = gamepads.find((element) => element && element.id == self.#gameControllerId);
                        if (temp) {
                            gp = temp;
                            self.#gameControllerId = temp.id;
                        }
                    }
                    var button0Pressed = false;
                    var button1Pressed = false;
                    var button2Pressed = false;
                    var button3Pressed = false;
                    self.#gameControllerBasicMapping.targetButton0.forEach(element => {
                        if (gp.buttons[element] && gp.buttons[element].pressed)
                            button0Pressed = true;
                    });
                    self.#gameControllerBasicMapping.targetButton1.forEach(element => {
                        if (gp.buttons[element] && gp.buttons[element].pressed)
                            button1Pressed = true;
                    });
                    self.#gameControllerBasicMapping.targetButton2.forEach(element => {
                        if (gp.buttons[element] && gp.buttons[element].pressed)
                            button2Pressed = true;
                    });
                    self.#gameControllerBasicMapping.targetButton3.forEach(element => {
                        if (gp.buttons[element] && gp.buttons[element].pressed)
                            button3Pressed = true;
                    });

                    var axes = [0, 0, 0, 0];
                    self.#gameControllerBasicMapping.targetAxis0.forEach(element => {
                        if (gp.axes[element]) {
                            if (Math.abs(gp.axes[element]) > Math.abs(axes[0]))
                                axes[0] = gp.axes[element];
                        }
                        if (gp.axes[element + 1]) {
                            if (Math.abs(gp.axes[element+1]) > Math.abs(axes[1]))
                                axes[1] = gp.axes[element+1];
                        }
                    });
                    self.#gameControllerBasicMapping.targetAxis1.forEach(element => {
                        if (gp.axes[element]) {
                            if (Math.abs(gp.axes[element]) > Math.abs(axes[2]))
                                axes[2] = gp.axes[element];
                        }
                        if (gp.axes[element + 1]) {
                            if (Math.abs(gp.axes[element + 1]) > Math.abs(axes[3]))
                                axes[3] = gp.axes[element + 1];
                        }
                    });

                    self.Message("ddyx-gamepad", {
                        axes: axes,
                        buttons: [button0Pressed, button1Pressed, button2Pressed, button3Pressed]
                    });
                    gamePadFrame = requestAnimationFrame(gamePadLoop);
                }

                window.addEventListener("gamepadconnected", (e) => {
                    //console.log(
                    //    "Gamepad connected at index %d: %s. %d buttons, %d axes.",
                    //    e.gamepad.index,
                    //    e.gamepad.id,
                    //    e.gamepad.buttons.length,
                    //    e.gamepad.axes.length,
                    //);
                    readGamepadSettings();
                    gamePadLoop();
                });
                window.addEventListener("gamepaddisconnected", (e) => {
                    console.log(
                        "Gamepad disconnected from index %d: %s",
                        e.gamepad.index,
                        e.gamepad.id,
                    );
                    cancelAnimationFrame(gamePadFrame);
                });
                events.onReady();
            });
        })();
    }
    Message(msg,data,callback) {
        if (window.ci !== undefined) {
            ci.message(msg, data, callback);
        }
    }
    Persist(name,callback) {
        var saveFile = ci.persist();
        saveFile.then(value => {
            if (value != null) {
                var blob = new Blob([value.buffer], { type: "application/octet-stream" });
                var link = document.createElement('a');
                link.href = window.URL.createObjectURL(blob);
                var date = new Date();
                var fileName = name + "-" + date.getFullYear() + '' + ('0' + (date.getMonth() + 1)).slice(-2) + '' + ('0' + date.getDate()).slice(-2) + '' + ('0' + date.getHours()).slice(-2) + '' + ('0' + date.getMinutes()).slice(-2) + '' + ('0' + date.getSeconds()).slice(-2) + ".ddyx";
                link.download = fileName;
                link.click();
            }
            if (callback !== undefined)
                callback();
        });
    }
    Save(callback) {
        var saveFile = ci.persist();
        saveFile.then(value => {
            var result = this.#idb.Save(this.#settings.name, value);
            result.then(() => {
                if (callback !== undefined)
                    callback();
            });
        });
    }
    SaveToCloud(pcallback,callback) {
        var saveFile = ci.persist();
        saveFile.then(value => {
            var jqxhr = $.ajax({ url: "/api/cloud/aws/getuploadlink?gameid=" + this.#settings.name })
                .done(function (result) {
                    if (result.status == true) {
                        //upload
                        var blob = new Blob([value.buffer], { type: "application/octet-stream" });

                        axios.put(result.url,blob,{
                            headers: { "content-type": blob.type },
                            onUploadProgress: (progressEvent) => {
                                pcallback(progressEvent.progress);
                            }
                        }).then(response => {
                            if (response.status == 200) {
                                callback(true);
                            }
                            else
                                callback(false, 4);
                        }).catch(err => {
                            console.log(err);
                            callback(false, 4);
                        });
                    }
                    else {
                        //error upload link not generated,non gold member or other error
                        callback(false,result.code);
                    }
                }).fail(function (jqXHR, textStatus) {
                    callback(false,1);
                });

        });
    }
    Load() {
        return this.#idb.Load(this.#settings.name);
    }
    SaveState(slot, callback) {
        var self = this;
        this.Message("ddyx-save-state", { slot: slot }, function () {
            //self.Save(callback);
            if (callback !== undefined)
                callback();
        });
    }
    LoadState(slot, callback) {
        this.Message("ddyx-load-state", { slot: slot }, function () {
            if (callback !== undefined)
                callback();
        });
    }
    SwitchDisc(index, callback) {
        this.Message("ddyx-mountdisc", { index: index }, function () {
            if (callback !== undefined)
                callback();
        });
    }
    ToggleFullscreen() {
        if (this.#fullscreen && document.fullscreenElement) {
            this.#fullscreen = false;
            document.exitFullscreen();
        }
        else {

            this.#fullscreen = true;

            this.#canvas.parentElement.requestFullscreen();

            try {//caijing
                // @ts-ignore
                navigator.keyboard.lock();
            } catch (e) { }
        }

        return;
    }
    SetVoodoo(enableUpscaler, enableAniso) {
        this.Message("ddyx-voodoo", { voodoo_upscaler: enableUpscaler, voodoo_aniso: enableAniso }, function () {

        });
    }
    Pause() {
        if (this.#paused)
            ci.resume();
        else
            ci.pause();

        this.#paused = !this.#paused;
        return this.#paused;
    }
    Mute() {
        if (this.#muted)
            ci.unmute();
        else
            ci.mute();

        this.#muted = !this.#muted;
        return this.#muted;

    }
}
