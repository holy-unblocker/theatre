import createModule from "./azahar.js";

const NATIVE_WIDTH = 400;
const NATIVE_HEIGHT = 480;

const canvas = document.getElementById("azahar-canvas");
const fpsEl = document.getElementById("fps");

function setupInput(module) {
  const setButton = module._web_set_button;

  const keyMap = new Map([
    ["ArrowLeft", 6], ["ArrowRight", 7], ["ArrowUp", 4], ["ArrowDown", 5],
    ["KeyZ", 0], ["KeyX", 8], ["KeyA", 1], ["KeyS", 9],
    ["KeyQ", 10], ["KeyW", 11], ["Enter", 3], ["ShiftRight", 2],
  ]);

  window.addEventListener("keydown", (e) => {
    if (!keyMap.has(e.code) || e.repeat) return;
    setButton(keyMap.get(e.code), 1);
  });

  window.addEventListener("keyup", (e) => {
    if (!keyMap.has(e.code)) return;
    setButton(keyMap.get(e.code), 0);
  });
}

async function initializeModule() {
  const module = await createModule({
    canvas,
    locateFile: (p) => p,
    print: () => {},
  });

  module.FS.mkdir("/system");
  module.FS.mkdir("/save");
  module.FS.mkdir("/content");

  return module;
}

async function loadRom(module, url = "rom.cci") {
  const res = await fetch(url);
  if (!res.ok) throw new Error("ROM not found");

  const data = new Uint8Array(await res.arrayBuffer());
  const path = "rom.cci";

  module.FS.writeFile(path, data);
  return path;
}

function startLoop(module) {
  const runFrame = module._web_run_frame;

  let frames = 0;
  let last = performance.now();

  function loop() {
    runFrame();
    frames++;

    const now = performance.now();
    if (now - last > 1000) {
      fpsEl.textContent = frames + " fps";
      frames = 0;
      last = now;
    }

    requestAnimationFrame(loop);
  }

  loop();
}
async function boot() {
  canvas.width = NATIVE_WIDTH;
  canvas.height = NATIVE_HEIGHT;
  function resize() {
    canvas.style.width = window.innerWidth + "px";
    canvas.style.height = window.innerHeight + "px";
  }
  window.addEventListener("resize", resize);
  resize();

  if (!crossOriginIsolated) {
    console.error("COOP/COEP required");
    return;
  }
  const module = await initializeModule();
  const romPath = await loadRom(module); 
  module._web_init(NATIVE_WIDTH, NATIVE_HEIGHT);
  if (!module.ccall("web_load_game", "number", ["string"], [romPath])) {
    throw new Error("Failed to load ROM");
  }
  setupInput(module);
  startLoop(module);
}
boot().catch(console.error);