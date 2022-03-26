"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.split = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 <h3>Collection: {{ collection.title | split: ' ' | join: ',' | append: 'something' | truncate: 10 }}</h3>
 {% assign abc = collection.title | split: ' ' | join: ',' | append: 'something' | truncate: 10 %}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign splitter = " " %}

 {% assign str = "Lorem ipsum dolor sit amet consectetur adipisicing elit"  %}
 {% assign str2 = str | split: splitter | join: ',' | append: 'something' | truncate: 10  %}
 {% assign str3 = "Lorem ipsum dolor sit amet consectetur adipisicing elit" | split: splitter | join: ',' | append: 'something' | truncate: 10  %}
 {{ str | split: splitter | join: ',' | append: 'something' | truncate: 10 }}
 ```
*/
/**
 * @link https://shopify.github.io/liquid/filters/split/
 */
var split = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'split', twigFilterName: 'split' }); };
exports.split = split;
