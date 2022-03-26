"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strToCapitalize = function (str) {
    return str.charAt(0).toUpperCase() + str.toLowerCase().slice(1);
};
exports.default = strToCapitalize;
