"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.concat = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
 ```ts
 Trường hợp tham số được gán vào biến
 {% assign fruits = "apples, oranges, peaches, tomatoes" | split: ", " %}
 {% assign plants = fruits | concat: ["broccoli", "carrots", "lettuce", "tomatoes"] %}
 {{ plants | join: ", " }}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign fruits = "apples, oranges, peaches, tomatoes" | split: ", " %}
 {% assign vegetables = "broccoli, carrots, lettuce, tomatoes" | split: ", " %}
 {% assign plants = fruits | concat: vegetables %}
 {{ plants | join: ", " }}
 ```
 */
/**
 * TODO: Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.github.io/liquid/filters/concat/
 */
var concat = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'concat', twigFilterName: 'merge' }); };
exports.concat = concat;
