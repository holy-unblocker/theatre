function normalizePanicUrl(value) {
    let candidate = String(value || '').trim();
    if (!candidate) return '';
    if (!/^[a-z][a-z\d+.-]*:/i.test(candidate)) candidate = 'https://' + candidate;
    try {
        const parsed = new URL(candidate);
        return ['http:', 'https:'].includes(parsed.protocol) ? parsed.href : '';
    } catch (error) {
        return '';
    }
}
function handlePanicKey(event) {
    const panicKey = localStorage.getItem('panicKey') || '`';
    const panicUrl = normalizePanicUrl(localStorage.getItem('panicUrl')) || 'https://www.google.com/';
    if (event.key === panicKey) {
        event.preventDefault();
        window.location.href = panicUrl;
    }
}
function safeGet(id) {
    return document.getElementById(id) || null;
}
function panicText(key, values, fallback) {
    return window.TruffledLanguage?.t(key, values, fallback) || fallback;
}
    function displayCurrentPanicKey() {
        const el = safeGet('currentPanicKey');
    if (!el) return;
    const panicKey = localStorage.getItem('panicKey') || '`';
    el.textContent = panicText('settings.panic.currentKey', { key: `'${panicKey}'` }, `your key: '${panicKey}'`);
}
function changePanicKey() {
    const instruction = safeGet('instruction');
    if (!instruction) return;
    instruction.textContent = panicText('settings.panic.changeHint', {}, 'click any key to change:');
    function captureKeyPress(event) {
        const newPanicKey = event.key;
        localStorage.setItem('panicKey', newPanicKey);
        alert(`panic key set to: '${newPanicKey}'`);
        window.removeEventListener('keydown', captureKeyPress);
        instruction.textContent = '(updated successfully)';
        displayCurrentPanicKey();
    }
    window.addEventListener('keydown', captureKeyPress);
}
function displayCurrentPanicUrl() {
    const urlText = safeGet('currentPanicUrl');
    const urlInput = safeGet('panicUrlInput');
    if (!urlText || !urlInput) return;
    const panicUrl = normalizePanicUrl(localStorage.getItem('panicUrl')) || 'https://www.google.com/';
    urlText.textContent = panicText('settings.panic.currentUrl', { url: panicUrl }, `your url: ${panicUrl}`);
    urlInput.value = panicUrl;
}
function savePanicUrl() {
    const urlInput = safeGet('panicUrlInput');
    if (!urlInput) return;
    const newUrl = normalizePanicUrl(urlInput.value);
    if (!newUrl) {
        alert('enter a valid link');
        return;
    }
    localStorage.setItem('panicUrl', newUrl);
    alert(`url saved: ${newUrl}`);
    displayCurrentPanicUrl();
}
window.addEventListener('keydown', handlePanicKey);
window.addEventListener('truffled:languagechange', function () {
    displayCurrentPanicKey();
    displayCurrentPanicUrl();
});
window.onload = function () {
    displayCurrentPanicKey();
    displayCurrentPanicUrl();
};
