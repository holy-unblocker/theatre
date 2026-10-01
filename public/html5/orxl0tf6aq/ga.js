function loadsc(scriptSrc, callback) {
    var script = document.createElement('script');
    script.onload = callback;
    script.src = scriptSrc;
    document.head.appendChild(script);
}

loadsc('https://www.googletagmanager.com/gtag/js?id=G-8SK3BC00X8', function() {
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());
    gtag('config', 'G-8SK3BC00X8');
});

if(window.location.href.indexOf("amazonaws") != -1 || window.location.href.indexOf("paper") != -1) {
	loadsc('https://api.gamemonetize.com/sdk_preload.js');
}

if(window.location.href.indexOf("thumb_wars") != -1) {
	loadsc('https://api.gamemonetize.com/sdk_preload_games.js');
}