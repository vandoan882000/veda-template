"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.camelcase = void 0;
/**
 ```ts
  {{ 'coming-soon' | camelcase }}
 ```
 */
/**
 * TODO: Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.dev/api/liquid/filters/string-filters#camelcase
 @example
 Input: {{ 'coming-soon' | camelcase }}
 Output: {{ 'coming-soon' | title | replace({ '-': '', '_': '', ' ': '' }) }}
 */
var camelcase = function (liquid) {
    return liquid.replace(/\|\s*camelcase\s*/gm, function () {
        return "| title | replace({ '-': '', '_': '', ' ': '' })";
    });
};
exports.camelcase = camelcase;
