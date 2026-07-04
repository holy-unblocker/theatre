<!DOCTYPE html>
<html lang="en-us">
<head>
<base href = "https://cdn.jsdelivr.net/gh/Pok12d/ta@main/tungobby/">
  <meta charset="utf-8">
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8">
  
  <link rel="stylesheet" href="TemplateData/style.css">
  <link rel="shortcut icon" href="TemplateData/favicon.ico">
</head>
<body>
  <div id="unity-container">
    <canvas id="unity-canvas"></canvas>
    <div id="unity-preview"><img src="TemplateData/preview.png" alt="Preview"></div>
      <div id="unity-game-title">
        <div class="line-1">Tung Tung Sahur</div>
        <div class="line-2">Obby Challenge</div>
      </div>
    <div id="unity-loading-bar">
      <div id="unity-progress-bar-empty">
        <div id="unity-progress-bar-full"></div>
      </div>
    </div>
    <div id="unity-loading-text">Loading</div>
    <div id="unity-warning"></div>
    <div id="unity-footer"></div>
  </div>

  <div id="orientation-warning" style="display: none;">
    <img src="TemplateData/rotate-device.png" alt="Rotate Device" style="width: 150px; margin-bottom: 20px;">
    Please rotate your device to <strong>landscape mode</strong> and reload the game.
  </div>

  <script>
    const container = document.getElementById("unity-container");
    const canvas = document.getElementById("unity-canvas");
    const loadingBar = document.getElementById("unity-loading-bar");
    const progressBarFull = document.getElementById("unity-progress-bar-full");
    const loadingText = document.getElementById("unity-loading-text");
    const warningBanner = document.getElementById("unity-warning");
    const gameTitle = document.getElementById("unity-game-title");
    const unityPreview = document.getElementById("unity-preview");
    const orientationWarning = document.getElementById("orientation-warning");

    function updateLoadingText(progress) {
      loadingText.innerText = "Loading " + Math.round(progress * 100) + "%";
    }

    function unityShowBanner(msg, type) {
      const div = document.createElement('div');
      div.innerHTML = msg;
      if (type === 'error') div.style = 'background: red; padding: 10px;';
      else div.style = 'background: yellow; padding: 10px;';
      warningBanner.appendChild(div);
      if (type !== 'error') setTimeout(() => div.remove(), 5000);
    }

    const buildUrl = "Build";
    const loaderUrl = buildUrl + "/TungTungSahur-ObbyChallenge-v.1.1.loader.js";
    const config = {
      dataUrl: buildUrl + "/TungTungSahur-ObbyChallenge-v.1.1.data.unityweb",
      frameworkUrl: buildUrl + "/TungTungSahur-ObbyChallenge-v.1.1.framework.js.unityweb",
      codeUrl: buildUrl + "/TungTungSahur-ObbyChallenge-v.1.1.wasm.unityweb",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "Nexus",
      productName: "Tung Tung Sahur: Obby Challenge",
      productVersion: "0.1",
      showBanner: unityShowBanner,
    };

    function checkOrientation() {
      const isPortrait = window.innerHeight > window.innerWidth;
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

      if (isMobile && isPortrait) {
        orientationWarning.style.display = "flex";
        container.style.display = "none";
      } else {
        orientationWarning.style.display = "none";
        container.style.display = "block";
      }
    }

    window.addEventListener("orientationchange", () => {
      setTimeout(() => {
        checkOrientation();
        location.reload();
      }, 300);
    });

    window.addEventListener("resize", checkOrientation);
    window.addEventListener("load", checkOrientation);

    // Запуск Unity
    const script = document.createElement("script");
    script.src = loaderUrl;
    script.onload = () => {
      createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
        updateLoadingText(progress);
      }).then((unityInstance) => {
        loadingBar.style.display = "none";
        unityPreview.style.display = "none";
        loadingText.style.display = "none";
        gameTitle.style.display = "none";
      }).catch((message) => alert(message));
    };
    document.body.appendChild(script);
  </script>
</body>
</html>
