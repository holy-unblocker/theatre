function getTitleLabel() {
    const labels = [
        'Deobfuscated Edition',
        'Hamburgers!',
        'Flashless Version',
        'Shoutouts to Simpleflips',
        'discord.gg/truffled',
        'truffled.lol',
        'bog was here',
        'silksong soon...'
    ];

    return labels[Math.floor(Math.random() * labels.length)];
}


function addScript(src) {
    const script = document.createElement('script');
    script.src = src;
    document.head.appendChild(script);
    return new Promise((resolve) => script.onload = resolve);
}

async function loadGame() {
    const parameters = new URLSearchParams(location.search);
    const getUrlParameter = (key) => parameters.get(key);

    window.HW_SETTINGS = {
        siteURL: './',
        corsProxy: localStorage.getItem("proxy") || 'https://corsproxy.io/?url=',
        pathPrefix: '',
        titleLabel: getTitleLabel(),
        titleLabelX: 645,
        titleLabelY: 250,
        titleLabelRotation: 0,
        titleLabelSize: 20,
        titleLabelColor: 0xfdfd65,
        resolutionZoomIncreaseRatio: 0.5,
        tesselation: 'tess2',
        replay_id: getUrlParameter('replay_id'),
        level_id: getUrlParameter('level_id')
    };


    await addScript(`./pixi.js`);
    await addScript(`./dependencies.js`);
    await addScript(`./happywheels.js`);
}

loadGame();
