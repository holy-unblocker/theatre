<!-- shxyder -->
<!DOCTYPE html>
<html lang="en-us">
<head>
  <meta charset="utf-8" />
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/centerclassroom/mc55@main/style.css" />
  <style>
    canvas:focus {
      outline: none;
    }
    html, body {
      padding: 0;
      margin: 0;
      overflow: hidden;
      -webkit-touch-callout: none;
      -webkit-user-select: none;
      -khtml-user-select: none;
      -moz-user-select: none;
      -ms-user-select: none;
      user-select: none;
      -webkit-tap-highlight-color: rgba(0,0,0,0);
      height: 100%;
    }
  </style>
</head>
<body class="light">
  <div id="unity-container" class="unity-desktop">
    <canvas id="unity-canvas" tabindex="-1"></canvas>
  </div>
  <div id="loading-cover" style="display:none;">
    <div id="unity-loading-bar">
      <div id="unity-progress-bar-empty" style="display: none;">
        <div id="unity-progress-bar-full"></div>
      </div>
      <div class="spinner"></div>
    </div>
  </div>

  <script>
    const hideFullScreenButton = "";
    const buildUrl = "https://cdn.jsdelivr.net/gh/centerclassroom/mc55@main/Build";
    const loaderUrl = buildUrl + "/bb0d9ecdb05db3e84da20bd14a4f84dc.loader.js";
    const config = {
      dataUrl: buildUrl + "/cffd2fddc93a5e3bb5ff56ac3bb5a297.data.br",
      frameworkUrl: buildUrl + "/c39bf58f300a834e953a20c745c5e5f2.framework.js",
      codeUrl: buildUrl + "/d649f30ffe591eef6765ee27d7fc980f.wasm.br",
      streamingAssetsUrl: "StreamingAssets",
      companyName: "DefaultCompany",
      productName: "GtaArcade",
      productVersion: "0.1"
    };

    const container = document.querySelector("#unity-container");
    const canvas = document.querySelector("#unity-canvas");
    const loadingCover = document.querySelector("#loading-cover");
    const progressBarEmpty = document.querySelector("#unity-progress-bar-empty");
    const progressBarFull = document.querySelector("#unity-progress-bar-full");
    const spinner = document.querySelector(".spinner");

    const canFullscreen = (function () {
      for (const key of [
        "exitFullscreen",
        "webkitExitFullscreen",
        "webkitCancelFullScreen",
        "mozCancelFullScreen",
        "msExitFullscreen"
      ]) {
        if (key in document) {
          return true;
        }
      }
      return false;
    })();

    if (/iPhone|iPad|iPod|Android/i.test(navigator.userAgent)) {
      container.className = "unity-mobile";
    }

    loadingCover.style.background = "url('background.png') center / cover";
    loadingCover.style.display = "";

    document.addEventListener("contextmenu", event => event.preventDefault());

    function FocusGame() {
      window.focus();
      canvas.focus();
    }

    window.addEventListener("pointerdown", FocusGame);
    window.addEventListener("touchstart", FocusGame);

    let StartUnityInstance;
    let myGameInstance;
    let ysdk = null;

    let environmentData = {
      language: "en",
      domain: "default_domain",
      deviceType: "desktop",
      isMobile: false,
      isDesktop: true,
      isTablet: false,
      isTV: false,
      appID: "default_app_id",
      browserLang: navigator.language || "en",
      payload: null,
      promptCanShow: false,
      reviewCanShow: false,
      platform: navigator.platform,
      browser: (function () {
        let userAgent = navigator.userAgent;
        if (userAgent.includes("YaBrowser")) return "Yandex";
        if (userAgent.includes("OPR") || userAgent.includes("Opera")) return "Opera";
        if (userAgent.includes("Firefox")) return "Firefox";
        if (userAgent.includes("MSIE") || userAgent.includes("Trident")) return "IE";
        if (userAgent.includes("Edge")) return "Edge";
        if (userAgent.includes("Chrome")) return "Chrome";
        if (userAgent.includes("Safari")) return "Safari";
        return "Other";
      })()
    };

    let cloudSaves = "noData";
    let paymentsData = "none";
    let playerData = "noData";
    let player = null;
    let payments = null;
    let initGame = false;
    let nowFullAdOpen = false;

    function GetPayments() {
      console.warn("GetPayments is not implemented");
      return Promise.resolve("none");
    }

    function SaveCloud() {
      console.warn("SaveCloud is not implemented");
    }

    function LoadCloud() {
      console.warn("LoadCloud is not implemented");
      return Promise.resolve("noData");
    }

    function InitPlayer() {
      console.warn("InitPlayer is not implemented");
      return Promise.resolve("noData");
    }

    function FullAdShow() {
      try {
        if (!nowFullAdOpen) {
          nowFullAdOpen = true;
          if (initGame) {
            myGameInstance.SendMessage("YandexGame", "OpenFullAd");
          }
          setTimeout(() => {
            nowFullAdOpen = false;
            if (initGame) {
              myGameInstance.SendMessage("YandexGame", "CloseFullAd", "true");
            }
            FocusGame();
          }, 500);
        }
      } catch (error) {}
    }

    function RewardedShow(rewardId) {
      try {
        myGameInstance.SendMessage("YandexGame", "RewardVideo", rewardId);
        function closeRewardedAd() {
          myGameInstance.SendMessage("YandexGame", "CloseRewardVideo");
          FocusGame();
        }
        closeRewardedAd();
      } catch (error) {}
    }

    function StickyAdActivity() {
      console.warn("StickyAdActivity is not implemented");
    }

    function Review() {
      console.warn("Review is not implemented");
    }

    function PromptShow() {
      console.warn("PromptShow is not implemented");
    }

    function InitLeaderboards() {
      console.warn("InitLeaderboards is not implemented");
    }

    function GetLeaderboardScores() {
      console.warn("GetLeaderboardScores is not implemented");
    }

    function SetLeaderboardScores() {
      console.warn("SetLeaderboardScores is not implemented");
    }

    function ConsumePurchase() {
      console.warn("ConsumePurchase is not implemented");
    }

    function flasgsData() {
      console.warn("ConsumePurchases is not implemented");
    }

    async function mergeFileParts(fileUrl, partCount) {
      try {
        const parts = [];
        for (let i = 0; i < partCount; i++) {
          const partUrl = `${fileUrl}.part${i}`;
          const response = await fetch(partUrl);
          if (!response.ok) {
            throw new Error(`Failed to fetch part ${partUrl}: ${response.statusText}`);
          }
          const part = await response.arrayBuffer();
          parts.push(part);
        }

        const totalSize = parts.reduce((sum, part) => sum + part.byteLength, 0);
        const merged = new Uint8Array(totalSize);
        let offset = 0;

        for (const part of parts) {
          merged.set(new Uint8Array(part), offset);
          offset += part.byteLength;
        }

        const blob = new Blob([merged], { type: "application/octet-stream" });
        return URL.createObjectURL(blob);
      } catch (error) {
        console.error(`Error merging file ${fileUrl}:`, error);
        throw error;
      }
    }

    async function prepareUnityConfig(config) {
      try {
        const dataPartsCount = 4;
        config.dataUrl = await mergeFileParts(
          buildUrl + "/cffd2fddc93a5e3bb5ff56ac3bb5a297.data.br",
          dataPartsCount
        );

        const wasmPartsCount = 4;
        config.codeUrl = await mergeFileParts(
          buildUrl + "/d649f30ffe591eef6765ee27d7fc980f.wasm.br",
          wasmPartsCount
        );

        return config;
      } catch (error) {
        console.error("Error preparing Unity config:", error);
        throw error;
      }
    }

    try {
      const script = document.createElement("script");
      script.src = loaderUrl;
      script.onload = async () => {
        try {
          const updatedConfig = await prepareUnityConfig({ ...config });
          StartUnityInstance = function () {
            createUnityInstance(canvas, updatedConfig, (progress) => {
              spinner.style.display = "none";
              progressBarEmpty.style.display = "";
              progressBarFull.style.width = `${100 * progress}%`;
            })
              .then((unityInstance) => {
                myGameInstance = unityInstance;
                loadingCover.style.display = "none";
              })
              .catch((message) => {
                console.error("Unity load error:", message);
              });
          };
          StartUnityInstance();
        } catch (error) {
          console.error("Error during Unity init:", error);
        }
      };
      document.body.appendChild(script);
    } catch (error) {
      console.error("Error during startup:", error);
    }

    function InitGame() {
      try {
        console.log("Init Game Success");
        initGame = true;
        if (nowFullAdOpen === true && myGameInstance != null) {
          myGameInstance.SendMessage("YandexGame", "OpenFullAd");
        }
      } catch (error) {
        console.error("Error in InitGame:", error);
      }
    }

    window.addEventListener("unhandledrejection", function (event) {
      console.warn("Unhandled rejection ignored:", event.reason);
      event.preventDefault();
    });
  </script>
</body>
</html>
