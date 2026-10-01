"use strict";
var __exports = (typeof exports !== "undefined") ? exports : null;
if (__exports) {
    __exports.__esModule = true;
}


const domCodeToKeyCodes = {
    "Unidentified": 0,
    "Digit1": 1,
    "Digit2": 2,
    "Digit3": 3,
    "Digit4": 4,
    "Digit5": 5,
    "Digit6": 6,
    "Digit7": 7,
    "Digit8": 8,
    "Digit9": 9,
    "Digit0": 10,

    "KeyQ": 11,
    "KeyW": 12,
    "KeyE": 13,
    "KeyR": 14,
    "KeyT": 15,
    "KeyY": 16,
    "KeyU": 17,
    "KeyI": 18,
    "KeyO": 19,
    "KeyP": 20,

    "KeyA": 21,
    "KeyS": 22,
    "KeyD": 23,
    "KeyF": 24,
    "KeyG": 25,
    "KeyH": 26,
    "KeyJ": 27,
    "KeyK": 28,
    "KeyL": 29,
    "KeyZ": 30,

    "KeyX": 31,
    "KeyC": 32,
    "KeyV": 33,
    "KeyB": 34,
    "KeyN": 35,
    "KeyM": 36,

    "F1": 37,
    "F2": 38,
    "F3": 39,
    "F4": 40,
    "F5": 41,
    "F6": 42,
    "F7": 43,
    "F8": 44,
    "F9": 45,
    "F10": 46,
    "F11": 47,
    "F12": 48,

    "Escape": 49,
    "Tab": 50,
    "Backspace": 51,
    "Enter": 52,
    "Space": 53,
    "AltLeft": 54,
    "AltRight": 55,
    "ControlLeft": 56,
    "ControlRight": 57,
    "ShiftLeft": 58,
    "ShiftRight": 59,//?
    "": 59,//?
    "CapsLock": 60,
    "ScrollLock": 61,
    "NumLock": 62,

    "Backquote": 63,
    "Minus": 64,
    "Equal": 65,
    "Backslash": 66,
    "BracketLeft": 67,
    "BracketRight": 68,
    "Semicolon": 69,
    "Quote": 70,
    "Period": 71,
    "Comma": 72,
    "Slash": 73,

    "UnidentifiedLtGt": 74,//?

    "PrintScreen": 75,
    "Pause": 76,
    "Insert": 77,
    "Home": 78,
    "PageUp": 79,
    "Delete": 80,
    "End": 81,
    "PageDown": 82,
    "ArrowLeft": 83,
    "ArrowUp": 84,
    "ArrowDown": 85,
    "ArrowRight": 86,

    "Numpad1": 87,
    "Numpad2": 88,
    "Numpad3": 89,
    "Numpad4": 90,
    "Numpad5": 91,
    "Numpad6": 92,
    "Numpad7": 93,
    "Numpad8": 94,
    "Numpad9": 95,
    "Numpad0": 96,

    "NumpadDivide": 97,
    "NumpadMultiply": 98,
    "NumpadSubtract": 99,
    "NumpadAdd": 100,
    "NumpadEnter": 101,
    "NumpadDecimal": 102,

    "MetaLeft": 103,
    "ContextMenu": 104,
    "MetaRight": 105,


};

function dosXGetKeyCode(code) {
    return domCodeToKeyCodes[code];
}

if (__exports) {
    __exports.key = dosXGetKeyCode;
}
if (typeof window !== "undefined") {
    window.dosXGetKeyCode = dosXGetKeyCode;
}
