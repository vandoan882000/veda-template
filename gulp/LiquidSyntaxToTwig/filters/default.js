"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._default = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
  ```ts
  Trường hợp tham số không được gán vào biến
  {% assign og_description = page_description | default: "1 cái gì đó" %}
  {{ og_description = page_description | default: shop.description | default: "1 cái gì đó" }}
  {{ og_description = page_description | default: "1 cái gì đó" }}
  ```

  ```ts
  Trường hợp tham số  được gán vào biến
  {% assign defaultValue = "Lorem ipsum dolor sit" %}
  {% assign og_description = page_description | default: shop.description | default: defaultValue | append: 'abc' | split(" ") %}
  {% assign og_description = page_description | append: 'abc' | split(" ") | default: shop.description | default: defaultValue %}
  {{ og_description = page_description | default: shop.description | default: shop.name }}
  ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/additional-filters#default
 */
var _default = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'default', twigFilterName: 'default' }); };
exports._default = _default;
