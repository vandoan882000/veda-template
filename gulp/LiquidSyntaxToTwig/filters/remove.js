"use strict";
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 'Hello, world. Goodbye, world.' | remove: 'world' }}
 {% assign title = 'Hello, world. Goodbye, world.' | remove: 'world' %}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign remover = 'world' %}
 {{ 'Hello, world. Goodbye, world.' | remove: remover }}
 {% assign title = 'Hello, world. Goodbye, world.' | remove: remover %}
 ```
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
 * TODO: Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.github.io/liquid/filters/remove/
 */
var remove = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'remove', twigFilterName: 'replace' }); };
exports.remove = remove;
