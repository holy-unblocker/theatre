const TILE_SIZE = 32;
const VIEWPORT_WIDTH = 21;
const VIEWPORT_HEIGHT = 15;
const PLAYER_MOVE_COOLDOWN = 0.12;
const PLAYER_JUMP_COOLDOWN = 0.18;
const PLAYER_KILL_COOLDOWN = 1.0;
const PLAYER_SAFE_TILES = new Set(["0", "1", "2", "3", "4", "8"]);
const PLAYER_BLOCKED_TILES = new Set(["5", "6", "9"]);
const ENEMY_WALKABLE_TILES = new Set(["0", "1", "2", "3"]);
const DIRECTIONS = [
  { dx: 0, dy: -1 },
  { dx: 0, dy: 1 },
  { dx: -1, dy: 0 },
  { dx: 1, dy: 0 }
];
const ENEMY_PROFILES = {
  0: { name: "Bubble", stepDelay: 0.74, behavior: "wander" },
  1: { name: "Firey", stepDelay: 0.46, behavior: "wander" },
  2: { name: "Pin", stepDelay: 0.92, behavior: "hunt" },
  3: { name: "Blocky", stepDelay: 0.34, behavior: "hunt" }
};
const data = window.WIJTTEFET_DATA;
const canvas = document.getElementById("game-canvas");
const ctx = canvas.getContext("2d");
const pauseButtons = document.querySelectorAll('[data-action="pause"]');
ctx.imageSmoothingEnabled = false;
const parsed = parseMap(data.mapText);
const map = parsed.rows;
const mapWidth = map[0].length;
const mapHeight = map.length;
const goalTile = findTile("8") ?? { x: 109, y: 53 };
const state = {
  loaded: false,
  paused: false,
  won: false,
  deaths: 0,
  flashTimer: 0,
  messageTimer: 0,
  message: "Loading...",
  moveCooldown: 0,
  killCooldown: 0,
  lastTime: performance.now(),
  player: {
    startX: parsed.start.x,
    startY: parsed.start.y,
    tileX: parsed.start.x,
    tileY: parsed.start.y,
    drawX: parsed.start.x,
    drawY: parsed.start.y,
    facing: { dx: 0, dy: 1 }
  },
  images: {
    tiles: {},
    sprites: {}
  },
  enemies: []
};
function parseMap(mapText) {
  const lines = mapText.trim().split(/\r?\n/);
  const [startX, startY] = lines[0].split(",").map((value) => Number.parseInt(value.trim(), 10));
  return {
    start: { x: startX, y: startY },
    rows: lines.slice(1)
  };
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function findTile(tileId) {
  for (let y = 0; y < mapHeight; y += 1) {
    for (let x = 0; x < mapWidth; x += 1) {
      if (map[y][x] === tileId) {
        return { x, y };
      }
    }
  }
  return null;
}
function getTile(x, y) {
  if (x < 0 || y < 0 || x >= mapWidth || y >= mapHeight) {
    return null;
  }
  return map[y][x];
}
function isTransparentPixel(red, green, blue) {
  const nearWhite = red > 248 && green > 248 && blue > 248;
  const hotPink = red > 220 && green < 100 && blue > 220;
  return nearWhite || hotPink;
}
function loadBitmap(path, makeTransparent = false) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => {
      if (!makeTransparent) {
        resolve(image);
        return;
      }
      const offscreen = document.createElement("canvas");
      offscreen.width = image.width;
      offscreen.height = image.height;
      const offscreenCtx = offscreen.getContext("2d");
      offscreenCtx.imageSmoothingEnabled = false;
      offscreenCtx.drawImage(image, 0, 0);
      const pixels = offscreenCtx.getImageData(0, 0, image.width, image.height);
      for (let index = 0; index < pixels.data.length; index += 4) {
        const red = pixels.data[index];
        const green = pixels.data[index + 1];
        const blue = pixels.data[index + 2];
        if (isTransparentPixel(red, green, blue)) {
          pixels.data[index + 3] = 0;
        }
      }
      offscreenCtx.putImageData(pixels, 0, 0);
      resolve(offscreen);
    };
    image.onerror = () => reject(new Error(`Failed to load ${path}`));
    image.src = path;
  });
}
function shuffle(array) {
  for (let index = array.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [array[index], array[swapIndex]] = [array[swapIndex], array[index]];
  }
  return array;
}
function sameTile(a, b) {
  return a.tileX === b.tileX && a.tileY === b.tileY;
}
function isEnemyOccupied(x, y, ignoredEnemy = null) {
  return state.enemies.some((enemy) => enemy !== ignoredEnemy && enemy.tileX === x && enemy.tileY === y);
}
function isEnemyWalkable(x, y) {
  const tile = getTile(x, y);
  return tile !== null && ENEMY_WALKABLE_TILES.has(tile);
}
function canEnemyMoveTo(enemy, x, y) {
  return isEnemyWalkable(x, y) && !isEnemyOccupied(x, y, enemy);
}
function buildEnemies() {
  state.enemies = data.enemies
    .filter((enemy) => enemy.x >= 0 && enemy.y >= 0 && enemy.x < mapWidth && enemy.y < mapHeight)
    .filter((enemy) => isEnemyWalkable(enemy.x, enemy.y))
    .map((enemy, index) => {
      const profile = ENEMY_PROFILES[enemy.type] ?? ENEMY_PROFILES[0];
      return {
        ...enemy,
        name: profile.name,
        behavior: profile.behavior,
        stepDelay: profile.stepDelay,
        stepTimer: (index % 4) * 0.06,
        tileX: enemy.x,
        tileY: enemy.y,
        drawX: enemy.x,
        drawY: enemy.y
      };
    });
}
function setMessage(message, seconds = 1.1) {
  state.message = message;
  state.messageTimer = seconds;
}
function resetPlayer(message) {
  state.player.tileX = state.player.startX;
  state.player.tileY = state.player.startY;
  state.player.drawX = state.player.startX;
  state.player.drawY = state.player.startY;
  state.moveCooldown = 0;
  state.killCooldown = PLAYER_KILL_COOLDOWN;
  state.flashTimer = 0.75;
  setMessage(message, 1.3);
}
function resolvePlayerTile(tile) {
  if (tile === "7") {
    state.deaths += 1;
    resetPlayer("Woody fell into the water.");
    return;
  }
  if (tile === "8" || (state.player.tileX === goalTile.x && state.player.tileY === goalTile.y)) {
    state.won = true;
    state.message = "Woody reached the Scary-Free Zone.";
    state.messageTimer = 999;
  }
}
function movePlayer(dx, dy, distance = 1) {
  if (state.won || state.moveCooldown > 0) {
    return;
  }
  state.player.facing = { dx, dy };
  const targetX = state.player.tileX + dx * distance;
  const targetY = state.player.tileY + dy * distance;
  const targetTile = getTile(targetX, targetY);
  if (targetTile === null || PLAYER_BLOCKED_TILES.has(targetTile)) {
    setMessage(distance === 2 ? "Jump blocked." : "That way is blocked.", 0.7);
    return;
  }
  if (!PLAYER_SAFE_TILES.has(targetTile) && targetTile !== "7") {
    setMessage(distance === 2 ? "You can't land there." : "That way is blocked.", 0.7);
    return;
  }
  state.player.tileX = targetX;
  state.player.tileY = targetY;
  state.player.drawX = targetX;
  state.player.drawY = targetY;
  state.moveCooldown = distance === 2 ? PLAYER_JUMP_COOLDOWN : PLAYER_MOVE_COOLDOWN;
  resolvePlayerTile(targetTile);
}
function jumpPlayer() {
  const { dx, dy } = state.player.facing;
  if (dx === 0 && dy === 0) {
    return;
  }
  movePlayer(dx, dy, 2);
}
function chooseHuntDirections(enemy) {
  const deltaX = state.player.tileX - enemy.tileX;
  const deltaY = state.player.tileY - enemy.tileY;
  const options = [];
  if (Math.abs(deltaX) >= Math.abs(deltaY) && deltaX !== 0) {
    options.push({ dx: Math.sign(deltaX), dy: 0 });
  }
  if (deltaY !== 0) {
    options.push({ dx: 0, dy: Math.sign(deltaY) });
  }
  if (Math.abs(deltaY) > Math.abs(deltaX) && deltaX !== 0) {
    options.push({ dx: Math.sign(deltaX), dy: 0 });
  }
  return options;
}
function chooseEnemyDirection(enemy) {
  const preferred = enemy.behavior === "hunt"
    ? chooseHuntDirections(enemy)
    : [];
  const fallback = shuffle([...DIRECTIONS].map((direction) => ({ ...direction })));
  const directions = [...preferred];
  fallback.forEach((direction) => {
    if (!directions.some((entry) => entry.dx === direction.dx && entry.dy === direction.dy)) {
      directions.push(direction);
    }
  });
  return directions.find((direction) => canEnemyMoveTo(enemy, enemy.tileX + direction.dx, enemy.tileY + direction.dy)) ?? null;
}
function stepEnemy(enemy) {
  const direction = chooseEnemyDirection(enemy);
  if (!direction) {
    return;
  }
  enemy.tileX += direction.dx;
  enemy.tileY += direction.dy;
  enemy.drawX = enemy.tileX;
  enemy.drawY = enemy.tileY;
}
function updateEnemies(deltaTime) {
  state.enemies.forEach((enemy) => {
    enemy.stepTimer -= deltaTime;
    while (enemy.stepTimer <= 0) {
      stepEnemy(enemy);
      enemy.stepTimer += enemy.stepDelay;
    }
  });
}
function updatePlayer() {
  state.player.drawX = state.player.tileX;
  state.player.drawY = state.player.tileY;
}
function updateTimers(deltaTime) {
  if (state.moveCooldown > 0) {
    state.moveCooldown -= deltaTime;
  }
  if (state.killCooldown > 0) {
    state.killCooldown -= deltaTime;
  }
  if (state.messageTimer > 0) {
    state.messageTimer -= deltaTime;
  } else if (!state.won) {
    state.message = "Esc/P shows controls.";
  }
  if (state.flashTimer > 0) {
    state.flashTimer -= deltaTime;
  }
}
function checkCollisions() {
  if (state.won || state.killCooldown > 0) {
    return;
  }
  const hitEnemy = state.enemies.find((enemy) => sameTile(enemy, state.player));
  if (!hitEnemy) {
    return;
  }
  state.deaths += 1;
  resetPlayer(`${hitEnemy.name} got Woody.`);
}
function getCamera() {
  return {
    x: clamp(state.player.drawX - VIEWPORT_WIDTH / 2 + 0.5, 0, mapWidth - VIEWPORT_WIDTH),
    y: clamp(state.player.drawY - VIEWPORT_HEIGHT / 2 + 0.5, 0, mapHeight - VIEWPORT_HEIGHT)
  };
}
function drawGoal(camera) {
  const screenX = (goalTile.x - camera.x) * TILE_SIZE;
  const screenY = (goalTile.y - camera.y) * TILE_SIZE;
  const pulse = 0.72 + 0.18 * Math.sin(performance.now() / 180);
  ctx.save();
  ctx.translate(screenX + TILE_SIZE / 2, screenY + TILE_SIZE / 2);
  ctx.strokeStyle = `rgba(255, 240, 160, ${pulse})`;
  ctx.lineWidth = 4;
  ctx.beginPath();
  ctx.arc(0, 0, 13, 0, Math.PI * 2);
  ctx.stroke();
  ctx.restore();
}
function drawWorld(camera) {
  for (let row = 0; row <= VIEWPORT_HEIGHT; row += 1) {
    for (let column = 0; column <= VIEWPORT_WIDTH; column += 1) {
      const mapX = Math.floor(camera.x) + column;
      const mapY = Math.floor(camera.y) + row;
      const tileId = map[mapY]?.[mapX];
      if (!tileId) {
        continue;
      }
      ctx.drawImage(
        state.images.tiles[tileId],
        Math.round((mapX - camera.x) * TILE_SIZE),
        Math.round((mapY - camera.y) * TILE_SIZE),
        TILE_SIZE,
        TILE_SIZE
      );
    }
  }
  drawGoal(camera);
  const sprites = [
    ...state.enemies.map((enemy) => ({
      x: enemy.drawX,
      y: enemy.drawY,
      image: state.images.sprites[enemy.type],
      alpha: 1
    })),
    {
      x: state.player.drawX,
      y: state.player.drawY,
      image: state.images.sprites.player,
      alpha: state.killCooldown > 0 && Math.floor(performance.now() / 90) % 2 === 0 ? 0.38 : 1
    }
  ].sort((left, right) => left.y - right.y);
  sprites.forEach((sprite) => {
    ctx.save();
    ctx.globalAlpha = sprite.alpha;
    ctx.drawImage(
      sprite.image,
      Math.round((sprite.x - camera.x) * TILE_SIZE),
      Math.round((sprite.y - camera.y) * TILE_SIZE),
      TILE_SIZE,
      TILE_SIZE
    );
    ctx.restore();
  });
}
function drawHud() {
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.46)";
  ctx.fillRect(10, 10, canvas.width - 20, 52);
  ctx.fillStyle = "#ffffff";
  ctx.font = "16px Arial";
  ctx.textAlign = "left";
  ctx.fillText(`Deaths: ${state.deaths}`, 20, 31);
  ctx.fillStyle = "#ffefb0";
  ctx.fillText(state.won ? "Safe." : state.message, 20, 52);
  ctx.textAlign = "right";
  ctx.fillStyle = "#d0d0d0";
  ctx.fillText("Esc/P pause", canvas.width - 20, 31);
  ctx.restore();
  if (state.flashTimer > 0) {
    ctx.fillStyle = `rgba(255, 255, 255, ${state.flashTimer * 0.18})`;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
  }
}
function drawPauseOverlay() {
  ctx.save();
  ctx.fillStyle = "rgba(0, 0, 0, 0.72)";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  const boxWidth = 430;
  const boxHeight = 238;
  const boxX = Math.round((canvas.width - boxWidth) / 2);
  const boxY = Math.round((canvas.height - boxHeight) / 2);
  ctx.fillStyle = "rgba(20, 20, 20, 0.94)";
  ctx.fillRect(boxX, boxY, boxWidth, boxHeight);
  ctx.strokeStyle = "#c8c8c8";
  ctx.lineWidth = 2;
  ctx.strokeRect(boxX + 1, boxY + 1, boxWidth - 2, boxHeight - 2);
  ctx.fillStyle = "#ffffff";
  ctx.textAlign = "left";
  ctx.font = "bold 28px Arial";
  ctx.fillText("Paused", boxX + 24, boxY + 38);
  ctx.font = "18px Arial";
  const lines = [
    "Arrow keys / WASD: Move 1 tile",
    "Space: Jump 2 tiles in the facing direction",
    "Esc or P: Pause / resume",
    "Goal: Reach the Scary-Free Zone sign",
    "Tip: After a death, Woody is safe for 1 second"
  ];
  lines.forEach((line, index) => {
    ctx.fillText(line, boxX + 24, boxY + 82 + index * 28);
  });
  ctx.fillStyle = "#ffefb0";
  ctx.fillText("Press Esc, P, or the pause button to resume.", boxX + 24, boxY + boxHeight - 26);
  ctx.restore();
}
function render() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  const camera = getCamera();
  drawWorld(camera);
  drawHud();
  if (state.paused) {
    drawPauseOverlay();
  }
}
async function loadAssets() {
  const tilePromises = Array.from({ length: 10 }, (_, index) =>
    loadBitmap(`Data/t${index}.bmp`).then((image) => {
      state.images.tiles[String(index)] = image;
    })
  );
  const spritePromises = Array.from({ length: 4 }, (_, index) =>
    loadBitmap(`Data/${index}.bmp`, true).then((image) => {
      state.images.sprites[index] = image;
    })
  );
  const playerPromise = loadBitmap("Data/guy.bmp", true).then((image) => {
    state.images.sprites.player = image;
  });
  await Promise.all([...tilePromises, ...spritePromises, playerPromise]);
}
function handleDirection(dx, dy) {
  if (state.paused) {
    return;
  }
  movePlayer(dx, dy, 1);
}
function togglePause(forceValue = !state.paused) {
  if (!state.loaded) {
    return;
  }
  state.paused = forceValue;
  state.lastTime = performance.now();
  render();
}
function setupInput() {
  window.addEventListener("keydown", (event) => {
    if (event.key === "Escape" || event.key === "p" || event.key === "P") {
      event.preventDefault();
      togglePause();
    } else if (state.paused) {
      event.preventDefault();
    } else if (event.key === "ArrowUp" || event.key === "w" || event.key === "W") {
      event.preventDefault();
      handleDirection(0, -1);
    } else if (event.key === "ArrowDown" || event.key === "s" || event.key === "S") {
      event.preventDefault();
      handleDirection(0, 1);
    } else if (event.key === "ArrowLeft" || event.key === "a" || event.key === "A") {
      event.preventDefault();
      handleDirection(-1, 0);
    } else if (event.key === "ArrowRight" || event.key === "d" || event.key === "D") {
      event.preventDefault();
      handleDirection(1, 0);
    } else if (event.key === " ") {
      event.preventDefault();
      jumpPlayer();
    }
  });
  document.querySelectorAll(".mobile-pad button").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action;
      if (action === "pause") {
        togglePause();
        return;
      }
      if (state.paused) {
        return;
      }
      if (action === "jump") {
        jumpPlayer();
        return;
      }
      if (action === "noop") {
        return;
      }
      const direction = button.dataset.dir;
      if (direction === "up") {
        handleDirection(0, -1);
      } else if (direction === "down") {
        handleDirection(0, 1);
      } else if (direction === "left") {
        handleDirection(-1, 0);
      } else if (direction === "right") {
        handleDirection(1, 0);
      }
    });
  });
  pauseButtons.forEach((button) => {
    button.addEventListener("click", () => {
      togglePause();
    });
  });
}
function animate(time) {
  const deltaTime = Math.min((time - state.lastTime) / 1000, 0.05);
  state.lastTime = time;
  if (!state.paused) {
    updateTimers(deltaTime);
    updatePlayer();
    updateEnemies(deltaTime);
    checkCollisions();
  }
  render();
  requestAnimationFrame(animate);
}
async function init() {
  try {
    setupInput();
    await loadAssets();
    buildEnemies();
    state.loaded = true;
    state.message = "Esc/P shows controls.";
    requestAnimationFrame(animate);
  } catch (error) {
    console.error(error);
  }
}
init();
