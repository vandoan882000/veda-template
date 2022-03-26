"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var checked = false;
var storageAvailable = function () {
    if (!checked) {
        checked = true;
        var item = '@localStorageCheck';
        try {
            window.localStorage.setItem(item, item);
            window.localStorage.removeItem(item);
            return true;
        }
        catch (_a) {
            return false;
        }
    }
};
var createStorage = function () {
    if (storageAvailable()) {
        return window.localStorage;
    }
    else {
        return {
            getItem: function () {
                return null;
            },
            setItem: function () { },
            removeItem: function () { },
            clear: function () { },
            key: function () {
                return null;
            },
            length: 0,
        };
    }
};
var storage = createStorage();
exports.default = storage;
