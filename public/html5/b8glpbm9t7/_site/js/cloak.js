(function () {
  var cloakState = Object.freeze({ key: "selectedCloak" });
  let cloakData = [];
  function getCloakFallbackIcon(cloak) {
    try {
      const iconUrl = new URL(cloak.icon, location.href);
      return `https://www.google.com/s2/favicons?sz=128&domain_url=${encodeURIComponent(iconUrl.origin)}`;
    } catch {
      return "/png/logo.png";
    }
  }
  function applyCloak(cloak) {
    if (!cloak) return removeCloak();
    try {
      document.title = cloak.title;
      let link = document.querySelector("link[rel*='icon']");
      if (!link) {
        link = document.createElement("link");
        link.rel = "icon";
        document.head.appendChild(link);
      }
      link.onerror = () => {
        link.onerror = null;
        link.href = getCloakFallbackIcon(cloak);
      };
      link.href = cloak.icon;
    } catch (e) {}
  }
  function removeCloak() {
    try {
      const titleEl = document.querySelector("title");
      document.title =
        (titleEl && titleEl.dataset && titleEl.dataset.original) ||
        "Geography | Truffled";
      let link = document.querySelector("link[rel*='icon']");
      if (link) {
        link.onerror = null;
        link.href = "/png/logo.png";
      }
      localStorage.removeItem(cloakState.key);
    } catch (e) {}
  }
  function saveCloak(cloak) {
    localStorage.setItem(cloakState.key, JSON.stringify(cloak));
    applyCloak(cloak);
  }
  function loadSaved() {
    const raw = localStorage.getItem(cloakState.key);
    if (!raw) return null;
    try {
      return JSON.parse(raw);
    } catch {
      return null;
    }
  }
  function buildUI(container) {
    const select = container.querySelector("#cloakSelect");
    if (!select) return;
    cloakData.forEach((c, i) => {
      const opt = document.createElement("option");
      opt.value = i;
      opt.textContent = c.name;
      select.appendChild(opt);
    });
    const saved = loadSaved();
    if (saved) {
      const idx = cloakData.findIndex((c) => c.name === saved.name);
      if (idx !== -1) select.value = idx;
    }
    select.addEventListener("change", () => {
      const i = select.value;
      if (i === "") return removeCloak();
      saveCloak(cloakData[i]);
    });
    const resetBtn = container.querySelector("#cloakReset");
    if (resetBtn) {
      resetBtn.addEventListener("click", () => {
        select.value = "";
        removeCloak();
      });
    }
  }
  const originalTitle = document.title;
  fetch("/js/json/cloak.json")
    .then((r) => {
      if (!r.ok) throw new Error("Failed to fetch cloak.json");
      return r.json();
    })
    .then((data) => {
      cloakData = data;
      const saved = loadSaved();
      if (saved) applyCloak(saved);
      const container = document.getElementById("cloaksettings");
      if (container) buildUI(container);
    })
    .catch(() => {
      const saved = loadSaved();
      if (saved) applyCloak(saved);
    });
  const titleEl = document.querySelector("title");
  if (titleEl && !titleEl.dataset.original) {
    titleEl.dataset.original = originalTitle;
  }
})();
