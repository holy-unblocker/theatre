// Module Preload Function (Compiled with Vite.JS)

(function () {
  const t = document.createElement("link").relList;
  if (t && t.supports && t.supports("modulepreload")) return;
  for (const r of document.querySelectorAll('link[rel="modulepreload"]')) o(r);
  new MutationObserver((r) => {
    for (const a of r)
      if (a.type === "childList")
        for (const u of a.addedNodes)
          u.tagName === "LINK" && u.rel === "modulepreload" && o(u);
  }).observe(document, { childList: !0, subtree: !0 });
  function n(r) {
    const a = {};
    return (
      r.integrity && (a.integrity = r.integrity),
      r.referrerPolicy && (a.referrerPolicy = r.referrerPolicy),
      r.crossOrigin === "use-credentials"
        ? (a.credentials = "include")
        : r.crossOrigin === "anonymous"
          ? (a.credentials = "omit")
          : (a.credentials = "same-origin"),
      a
    );
  }
  function o(r) {
    if (r.ep) return;
    r.ep = !0;
    const a = n(r);
    fetch(r.href, a);
  }
})();

// Code starts here

const defaultSettings = { steamID: Math.floor(Math.random() * 1e6), personaName: "Player" };
const settings = loadSettings();

function saveSettings(e) {
  localStorage.setItem("settings", JSON.stringify(e));
}

function loadSettings() {
  const savedSettings = localStorage.getItem("settings");
  if (savedSettings)
    return JSON.parse(savedSettings);

  const defaults = JSON.parse(JSON.stringify(defaultSettings)); // ???? is this necessary
  return saveSettings(defaults), defaults;
}


var PacketType = ((packet) => (
  (packet[(packet.C2SHello = 1)] = "C2SHello"),
  (packet[(packet.C2SGetLobbies = 2)] = "C2SGetLobbies"),
  (packet[(packet.S2CLobbies = 3)] = "S2CLobbies"),
  (packet[(packet.C2SPacket = 4)] = "C2SPacket"),
  (packet[(packet.S2CPacket = 5)] = "S2CPacket"),
  (packet[(packet.C2SCreateLobby = 6)] = "C2SCreateLobby"),
  (packet[(packet.S2CCreateLobby = 7)] = "S2CCreateLobby"),
  (packet[(packet.C2SJoinLobby = 8)] = "C2SJoinLobby"),
  (packet[(packet.S2CJoinLobby = 9)] = "S2CJoinLobby"),
  (packet[(packet.C2SSetCode = 10)] = "C2SSetCode"),
  (packet[(packet.C2SLeaveLobby = 11)] = "C2SLeaveLobby"),
  (packet[(packet.S2CPlayerJoined = 13)] = "S2CPlayerJoined"),
  (packet[(packet.S2CPlayerLeft = 14)] = "S2CPlayerLeft"),
  (packet[(packet.S2CCurrentLobby = 15)] = "S2CCurrentLobby"),
  packet
))(PacketType || {});

var StatusType = ((status) => (
  (status[(status.Success = 1)] = "Success"),
  (status[(status.DoesntExist = 2)] = "DoesntExist"),
  (status[(status.Full = 4)] = "Full"),
  (status[(status.Error = 5)] = "Error"),
  status
))(StatusType || {}),
  PlayerState = ((state) => ((state[(state.Joined = 1)] = "Joined"), (state[(state.Left = 2)] = "Left"), state))(
    PlayerState || {}
  );

const suffix = window.self !== window.top ? "/.proxy/" : "/";

//const serverURL = new URL("http://127.0.0.1:4158");
// Use the notnite one because I haven't finished the server code yet 
const serverURL = new URL("https://webwebfishing.notnite.com/")
serverURL.pathname = suffix + "ws";
serverURL.protocol = serverURL.protocol === "https:" ? "wss:" : "ws:";

const socket = new WebSocket(serverURL.toString()),
  lobbies = new Map();

let currentLobby = null;

function sendPacket(packet) {
  socket.send(JSON.stringify(packet));
}

function setLobbyCode(code) {
  sendPacket({ type: PacketType.C2SSetCode, code: code }), currentLobby != null && (currentLobby.code = code);
  const t = Array.from(lobbies.values()).find(
    (n) => n.id === (currentLobby == null ? undefined : currentLobby.id)
  );
  t != null && (t.code = code);
}

const gamePacketReciever = new EventTarget();

class GamePacketEvent extends Event {
  constructor(data) {
    super("message");
    this.data = data;
  }
}

socket.addEventListener("open", () => {
  sendPacket({ type: PacketType.C2SHello, steam: { id: settings.steamID, name: settings.personaName } });
});

socket.addEventListener("message", (data) => {
  const message = JSON.parse(data.data);
  console.log(message);
  switch (message.type) {
    case PacketType.S2CLobbies: {
      lobbies.clear();
      for (const lobby of message.lobbies) {
        lobbies.set(lobby.id, lobby);
      }
      break;
    }
    case PacketType.S2CCreateLobby: {
      lobbies.set(message.lobby.id, message.lobby);
      break;
    }
    case PacketType.S2CJoinLobby: {
      if (message.response === StatusType.Success) {
        currentLobby = lobbies.get(message.id) ?? null;
      }
      break;
    }
    case PacketType.S2CCurrentLobby: {
      currentLobby = message.lobby;
      lobbies.set(message.lobby.id, message.lobby);
      break;
    }
  }
  gamePacketReciever.dispatchEvent(new GamePacketEvent(message));
});

const channelPacketCache = new Map(),
  packetCache = new Set();
function processBridgeMessage(message) {
  var friend, n;
  switch (message.type) {
    case "poll": {
      const cache = Array.from(packetCache);
      packetCache.clear();
      return cache;
    }
    case "requestLobbyList": {
      sendPacket({ type: PacketType.C2SGetLobbies });
      break;
    }
    case "getLobbyData": {
      console.log(lobbies, message);
      return lobbies.get(message.id);
    }
    case "getLobbyMemberByIndex": {
      const lobby = lobbies.get(message.lobby);
      console.log(lobby, message);
      return lobby == null ? null : lobby.players[message.index];
    }
    case "getFriendPersonaName": {
      const lobby = currentLobby;
      return lobby == null
        ? null
        : (friend = lobby.players.find((player) => player.id === message.id)) == null
          ? undefined
          : friend.name;
    }
    case "getNumLobbyMembers": {
      const lobby = lobbies.get(message.lobby);
      return lobby == null ? 0 : lobby.players.length;
    }
    case "createLobby": {
      sendPacket({ type: PacketType.C2SCreateLobby, maxPlayers: message.maxPlayers });
      break;
    }
    case "joinLobby": {
      sendPacket({ type: PacketType.C2SJoinLobby, id: message.id });
      break;
    }
    case "leaveLobby": {
      sendPacket({ type: PacketType.C2SLeaveLobby });
      break;
    }
    case "setCode": {
      setLobbyCode(message.code);
      break;
    }
    case "getLobbyOwner": {
      const lobby = lobbies.get(message.id);
      return lobby == null ? undefined : lobby.ownerId;
    }
    case "getAvailableP2PPacketSize": {
      const channel = message.channel,
        packets = channelPacketCache.get(channel);
      return packets == null || packets.length === 0 ? 0 : packets[0].data.length;
    }
    case "readP2PPacket": {
      const channel = message.channel,
        packets = channelPacketCache.get(channel);
      return packets == null || packets.length === 0 ? null : packets.shift();
    }
    case "getSteamID":
      return settings.steamID;
    case "getPersonaName":
      return settings.personaName;
    case "sendP2PPacket": {
      sendPacket({
        type: PacketType.C2SPacket,
        member: message.member,
        channel: message.channel,
        data: message.data,
      });
      break;
    }
    default:
      throw new Error("Unknown message type: " + JSON.stringify(message));
  }
}
window.bridge = {
  process(data) {
    const message = JSON.parse(data),
      response = processBridgeMessage(message);
    return JSON.stringify(response ?? null);
  },
};
gamePacketReciever.addEventListener("message", (event) => {
  if (event instanceof GamePacketEvent) {
    var packet = event.data;
    switch (packet.type) {
      case PacketType.S2CLobbies: {
        packetCache.add({
          type: "lobby_match_list",
          data: packet.lobbies.map((t) => t.id),
        });
        break;
      }
      case PacketType.S2CPacket: {
        const channelCache = channelPacketCache.get(packet.channel),
          packet1 = { sender: packet.sender, data: packet.data };
        channelCache == null ? channelPacketCache.set(packet.channel, [packet1]) : channelCache.push(packet1);
        break;
      }
      case PacketType.S2CCreateLobby: {
        packetCache.add({ type: "lobby_created", id: packet.lobby.id });
        break;
      }
      case PacketType.S2CJoinLobby: {
        packetCache.add({
          type: "lobby_joined",
          id: packet.id,
          response: packet.response,
        });
        break;
      }
      case PacketType.S2CPlayerJoined: {
        packetCache.add({ type: "p2p_session_request", id: packet.player.id });
        packetCache.add({
          type: "lobby_chat_update",
          id: (currentLobby == null ? undefined : currentLobby.id) ?? 0,
          player: packet.player.id,
          state: PlayerState.Joined,
        });
        break;
      }
      case PacketType.S2CPlayerLeft: {
        packetCache.add({
          type: "lobby_chat_update",
          id: (currentLobby == null ? undefined : currentLobby.id) ?? 0,
          player: packet.player.id,
          state: PlayerState.Left,
        });
        break;
      }
    }
  }
});

// Injection & Game/Save loading Stuff

const PROJECT_NAME = "webfishing_2_newver",
  PACKAGE_NAME = PROJECT_NAME + ".pck",
  GODOT = new window.Engine({
    canvasResizePolicy: 2,
    executable: "./" + PROJECT_NAME,
    focusCanvas: true,
    args: ["--main-pack", PACKAGE_NAME],
    onExit: (code) => {
      window.location.reload();
    }
  }),
  gameFilePicker = document.querySelector("#exe");

gameFilePicker.addEventListener("input", () => {
  const e = gameFilePicker.files[0];
  const reader = new FileReader();
  reader.onload = async () => {
    if (!(reader.result instanceof ArrayBuffer))
      throw new Error("Expected ArrayBuffer");
    await GODOT.preloadFile(reader.result, PACKAGE_NAME);
    await GODOT.start();
    document.querySelector("#app").style.display = "none";
  };
  reader.readAsArrayBuffer(e);
});

async function injectPatches() {
  await GODOT.init("./" + PROJECT_NAME);
  const networkingScript = await fetch(window.location.href + "/Steam.gd").then((data) => {
    console.log("loaded steam.gd")
    return data.arrayBuffer()
  });
  await GODOT.preloadFile(networkingScript, "Steam.gd");
  const overrideConfig = `[autoload]\nSteam="*./Steam.gd"`.trim();
  await GODOT.preloadFile(new TextEncoder().encode(overrideConfig), "override.cfg");
  gameFilePicker.disabled = false;
}
await injectPatches();

async function loadGodotFS() {
  if (!(await window.indexedDB.databases()).some((n) => n.name === "/userfs"))
    throw new Error("Database does not exist");
  const request = window.indexedDB.open("/userfs", 21);
  return await new Promise((onSuccess, onError) => {
    (request.onsuccess = () => {
      onSuccess(request.result);
    }),
      (request.onerror = () => {
        onError(request.error);
      });
  });
}

const v = "FILE_DATA";
const savePath = "/userfs/webfishing_save_slot_0.sav";
// (ill do the rest later, this just loads a save from a file and then saves it to godots file system)

async function g(e, t, n, o) {
  const r = e.transaction(t, n),
    a = r.objectStore(t),
    u = await o(a);
  return await new Promise((_, D) => {
    (r.oncomplete = () => {
      _(u);
    }),
      (r.onerror = () => {
        D(r.error);
      });
  });
}
async function G(e, t) {
  return await new Promise((n, o) => {
    const r = e.get(t);
    (r.onsuccess = () => {
      n(r.result);
    }),
      (r.onerror = () => {
        o(r.error);
      });
  });
}
async function H(e, t, n) {
  return await new Promise((o, r) => {
    const a = e.put(t, n);
    (a.onsuccess = () => {
      o();
    }),
      (a.onerror = () => {
        r(a.error);
      });
  });
}
async function z(e, t) {
  return await new Promise((n, o) => {
    const r = e.delete(t);
    (r.onsuccess = () => {
      n();
    }),
      (r.onerror = () => {
        o(r.error);
      });
  });
}
var N;
(N = document.querySelector("#canvas")) == null ||
  N.addEventListener("click", (e) => {
    e.preventDefault();
  });

const usernameInput = document.querySelector("#username");
usernameInput.value = settings.personaName;
usernameInput.addEventListener("input", () => {
  settings.personaName = usernameInput.value;
  saveSettings(settings);
});

const J = document.querySelector("#save");
J.addEventListener("input", () => {
  const e = J.files[0],
    t = new FileReader();
  (t.onload = async () => {
    if (!(t.result instanceof ArrayBuffer))
      throw new Error("Expected ArrayBuffer");
    const n = new Uint8Array(t.result),
      o = await loadGodotFS();
    try {
      await g(o, v, "readwrite", async (r) => {
        await H(
          r,
          { timestamp: new Date().toISOString(), mode: 33206, contents: n },
          savePath
        );
      });
    } catch (r) {
      console.error("Failed to save file", r);
    }
    o.close();
  }),
    t.readAsArrayBuffer(e);
});

const K = document.querySelector("#downloadSave");
K.addEventListener("click", async () => {
  const e = await loadGodotFS(),
    t = await g(e, v, "readonly", async (a) => await G(a, savePath));
  if ((e.close(), !t)) {
    console.error("No file found");
    return;
  }
  const n = new Blob([t.contents], { type: "application/octet-stream" }),
    o = URL.createObjectURL(n),
    r = document.createElement("a");
  (r.href = o), (r.download = savePath.split("/").pop()), r.click();
});

const W = document.querySelector("#resetSave");
W.addEventListener("click", async () => {
  if (!confirm("reset the save file?")) return;
  const e = await loadGodotFS();
  await g(e, v, "readwrite", async (t) => {
    await z(t, savePath);
  }),
    e.close();
});

window.addEventListener("beforeunload",(ev)=>{
  if (window.saving_in_progress){ // == just in case its null
    ev.preventDefault();
  }
})