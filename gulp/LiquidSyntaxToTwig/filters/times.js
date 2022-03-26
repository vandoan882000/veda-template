"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.times = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("times", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.times.params"));
  var factor2 = args[0];
  var _factor2 = Number(factor2);
  var _factor1 = Number(value);
  if (isNaN(_factor1))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.times.value", {
        error_signal: value,
      })
    );
  if (isNaN(_factor2))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.times.factor", {
        error_signal: factor2,
      })
    );
  try {
    return JSON.stringify(_factor1 * _factor2);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.times.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 100 | times: 10}}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign factor2 = 10 %}
 {{ 100 | times: factor2}}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/times/
 */
var times = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "times",
    twigFilterName: "times",
  });
};
exports.times = times;
