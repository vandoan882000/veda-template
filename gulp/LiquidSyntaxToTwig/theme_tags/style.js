"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.style = void 0;
/**
 * @link https://shopify.dev/api/liquid/tags/theme-tags#style
 */
var style = function (liquid) {
    return liquid
        .replace(/{%\.*styles.*%}/gm, function () {
        return "<style data-shopify>";
    })
        .replace(/{%\.*endstyles.*%}/gm, function () {
        return "</style>";
    });
};
exports.style = style;
