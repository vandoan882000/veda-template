"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.at_least = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
Twig.extendFilter("at_least", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.at_least.params"));
  var min = args[0];
  var _min = Number(min);
  var _value = Number(value);
  if (isNaN(_min))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.at_least.min", {
        error_signal: min,
      })
    );
  if (isNaN(_value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.at_least.value", {
        error_signal: value,
      })
    );
  try {
    return JSON.stringify(_value < _min ? _min : _value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.at_least.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 10|at_least: 5 }}
 {{ 3|at_least: 5 }}
 ```
 ```ts
 Trường hợp tham số được gán vào biến
 {% assign min_value = 5 %}
 {{ 10 | at_least: min_value }}
 {{ 3 | at_least: min_value }}
*/
/**
 * @link https://shopify.github.io/liquid/filters/at_least/
 */
var at_least = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "at_least",
    twigFilterName: "at_least",
  });
};
exports.at_least = at_least;
