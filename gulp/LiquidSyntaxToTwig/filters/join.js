"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.join = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {% assign abc = collection.title | join: ' ' | append: "Lorem ipsum" | truncate: 10, "..." %}
 {% assign abc = collection.title | append: "Lorem ipsum" | truncate: 10, "..." | join: ' ' %}
 <h3>Collection: {{ collection.title | join: ' ' | append: "Lorem ipsum" | truncate: 10, "..." }}</h3>
 <h3>Collection: {{ collection.title | append: "Lorem ipsum" | truncate: 10, "..." | join: ' ' }}</h3>
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign jointer = ' ' %}
 <h3>Collection: {{ collection.title | join: jointer | truncate: 10, "..." }}</h3>
 <h3>Collection: {{ collection.title | truncate: 10, "..." | join: jointer }}</h3>

 {% assign abc = collection.title | append: "Lorem ipsum" | join: jointer | truncate: 10, "..." %}
 {% assign abc = collection.title | append: "Lorem ipsum" | truncate: 10, "..." | join: jointer %}
 ```
*/
/**
 * @link https://shopify.github.io/liquid/filters/join/
 */
var join = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'join', twigFilterName: 'join' }); };
exports.join = join;
