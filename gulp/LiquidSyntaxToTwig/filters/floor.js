"use strict";
/**
 ```ts
 {{ 4.6 | floor }}
 {{ 4.3 | floor }}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.floor = void 0;
/**
 * TODO: Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.github.io/liquid/filters/floor/
 */
var floor = function (liquid) {
    return liquid.replace(/\|\s*floor/gm, "| round(0, 'floor')");
};
exports.floor = floor;
