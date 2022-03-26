"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forloop = void 0;
/**
 * @link https://shopify.dev/api/liquid/objects/for-loops
 */
var forloop = function (liquid) {
    return liquid.replaceAll('forloop.', 'loop.');
};
exports.forloop = forloop;
