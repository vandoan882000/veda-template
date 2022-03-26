"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.round = void 0;
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
/**
  ```ts
  Trường hợp tham số không được gán vào biến
  {{ 4.6 | round }}
  {{ 4.5612 | round: 2 }}

  {% assign num = 4.6 | round }
  {% assign num = 4.6 | round: 2 }
  {num}
  ```

  ```ts
  Trường hợp tham số được gán vào biến
  {% assign roundNumber = 2 %}
  {{ 4.6 | round }}
  {{ 4.5612 | round: roundNumber }}

  {% assign num = 4.6 | round }
  {% assign num = 4.6 | round: roundNumber }
  {num}
  ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/round/
 */
var round = function (liquid) { return (0, liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({ liquid: liquid, liquidFilterName: 'round', twigFilterName: 'round' }); };
exports.round = round;
