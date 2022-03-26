"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ceil = void 0;
/**
 ```ts
 {{ 4.6 | ceil }}
 {{ 4.3 | ceil }}
 ```
 */
/**
 * TODO: Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.github.io/liquid/filters/ceil/
 */
var ceil = function (liquid) {
    return liquid.replace(/\|\s*ceil/gm, "| round(0, 'ceil')");
};
exports.ceil = ceil;
