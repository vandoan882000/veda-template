"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var strToRegexpPattern = function (value) {
    return value
        .replace(/\|/g, '\\|')
        .replace(/\./g, '\\.')
        .replace(/\(/g, '\\(')
        .replace(/\)/g, '\\)')
        .replace(/\?/g, '\\?')
        .replace(/\{/g, '\\{')
        .replace(/\}/g, '\\}')
        .replace(/\[/g, '\\[')
        .replace(/\]/g, '\\]')
        .replace(/\//g, '\\/')
        .replace(/\^/g, '\\^')
        .replace(/\s/g, '\\s');
};
exports.default = strToRegexpPattern;
