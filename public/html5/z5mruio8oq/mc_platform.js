// Minecraft Web - Platform JS Library
// Handles world creation modal dialog and save syncing

mergeInto(LibraryManager.library, {
    mcShowCreateWorldDialog: function () {
        // Create modal overlay
        var overlay = document.createElement('div');
        overlay.id = 'mc-create-world';
        overlay.style.cssText = 'position:fixed;top:0;left:0;width:100%;height:100%;' +
            'background:rgba(0,0,0,0.8);display:flex;align-items:center;' +
            'justify-content:center;z-index:9999;font-family:monospace';

        var box = document.createElement('div');
        box.style.cssText = 'background:#3c3c3c;border:2px solid #888;padding:28px;' +
            'min-width:320px;color:#eee;text-align:center';

        box.innerHTML =
            '<h2 style="margin:0 0 18px;color:#fff;font-size:20px;letter-spacing:1px">Create New World</h2>' +
            '<div style="text-align:left;margin-bottom:14px">' +
            '<label style="font-size:13px;color:#aaa">World Name</label><br>' +
            '<input id="mc-worldname" type="text" value="My World" ' +
            'style="width:100%;box-sizing:border-box;padding:8px;margin-top:5px;' +
            'background:#222;color:#fff;border:1px solid #666;font-size:14px;font-family:monospace">' +
            '</div>' +
            '<div style="text-align:left;margin-bottom:20px">' +
            '<label style="font-size:13px;color:#aaa">Game Mode</label><br>' +
            '<select id="mc-gamemode" style="width:100%;box-sizing:border-box;padding:8px;' +
            'margin-top:5px;background:#222;color:#fff;border:1px solid #666;font-size:14px;font-family:monospace">' +
            '<option value="creative">Creative</option>' +
            '<option value="survival">Survival</option>' +
            '</select>' +
            '</div>' +
            '<div style="display:flex;gap:10px;justify-content:center">' +
            '<button id="mc-create-btn" style="padding:10px 24px;background:#4a8a4a;color:#fff;' +
            'border:none;cursor:pointer;font-size:15px;font-family:monospace;letter-spacing:1px">Create</button>' +
            '<button id="mc-cancel-btn" style="padding:10px 24px;background:#555;color:#fff;' +
            'border:none;cursor:pointer;font-size:15px;font-family:monospace;letter-spacing:1px">Cancel</button>' +
            '</div>';

        overlay.appendChild(box);
        document.body.appendChild(overlay);

        // Focus the name field
        setTimeout(function () {
            var input = document.getElementById('mc-worldname');
            if (input) { input.focus(); input.select(); }
        }, 50);

        // Reset state
        window._mcWorldStatus = -1;
        window._mcWorldResult = null;

        document.getElementById('mc-create-btn').onclick = function () {
            var nm = (document.getElementById('mc-worldname').value || 'My World').trim();
            var mode = document.getElementById('mc-gamemode').value;
            window._mcWorldStatus = 1;
            window._mcWorldResult = nm + '|' + mode;
            document.body.removeChild(overlay);
        };

        document.getElementById('mc-cancel-btn').onclick = function () {
            window._mcWorldStatus = 0;
            window._mcWorldResult = null;
            document.body.removeChild(overlay);
        };

        // Handle Enter key in name field
        document.getElementById('mc-worldname').onkeydown = function (e) {
            if (e.key === 'Enter') document.getElementById('mc-create-btn').click();
            if (e.key === 'Escape') document.getElementById('mc-cancel-btn').click();
        };
    },

    mcGetWorldStatus: function () {
        if (window._mcWorldStatus === undefined) return -1;
        return window._mcWorldStatus;
    },

    mcGetWorldResult: function () {
        var r = window._mcWorldResult;
        if (!r) return 0;
        window._mcWorldResult = null;
        window._mcWorldStatus = -1;
        var len = lengthBytesUTF8(r) + 1;
        var buf = _malloc(len);
        stringToUTF8(r, buf, len);
        return buf;
    },

    mcSyncSaves: function () {
        if (typeof FS !== 'undefined') {
            FS.syncfs(false, function (err) {
                if (err) console.error('FS sync error:', err);
            });
        }
    }
});
