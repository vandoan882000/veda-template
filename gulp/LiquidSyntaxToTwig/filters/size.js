"use strict";
/**
 ```ts
 {{ 'The quick brown fox jumps over a lazy dog.' | size }}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.size = void 0;
/**
 * TODO: Có hay không việc nên custom lại cái này ???
 * @link https://shopify.github.io/liquid/filters/size/
 */
var size = function (liquid) {
    return liquid.replace(/\|\s*size/gm, "| length");
};
exports.size = size;
