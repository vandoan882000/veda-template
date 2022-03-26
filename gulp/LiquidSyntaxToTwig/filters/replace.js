"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replace = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {% assign abc = collection.title | replace: ' ' | append: "Lorem ipsum" | truncate: 10, "..." %}
 {% assign abc = collection.title | append: "Lorem ipsum" | truncate: 10, "..." | replace: ' ' %}
 <h3>Collection: {{ collection.title | replace: ' ' | append: "Lorem ipsum" | truncate: 10, "..." }}</h3>
 <h3>Collection: {{ collection.title | append: "Lorem ipsum" | truncate: 10, "..." | replace: ' ' }}</h3>
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign source = '.' %}
 {% assign target = ' ' %}
 <h3>Collection: {{ collection.title | replace: source, target | truncate: 10, "..." }}</h3>
 <h3>Collection: {{ collection.title | truncate: 10, "..." | replace: source, target }}</h3>

 {% assign abc = collection.title | append: "Lorem ipsum" | replace: source, target | truncate: 10, "..." %}
 {% assign abc = collection.title | append: "Lorem ipsum" | truncate: 10, "..." | replace: source, target %}
 ```
*/
/**
 * @link https://shopify.github.io/liquid/filters/replace/
 */
var replace = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'replace', twigFilterName: 'replace' }); };
exports.replace = replace;
