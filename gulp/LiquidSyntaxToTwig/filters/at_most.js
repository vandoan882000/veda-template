"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.at_most = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
Twig.extendFilter("at_most", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.at_most.params"));
  var max = args[0];
  var _max = Number(max);
  var _value = Number(value);
  if (isNaN(_max))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.at_most.max", {
        error_signal: max,
      })
    );
  if (isNaN(_value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.at_most.value", {
        error_signal: value,
      })
    );
  try {
    return JSON.stringify(_value > _max ? _max : _value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.at_most.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 10|at_most: 5 }}
 {{ 3|at_most: 5 }}
 ```
 ```ts
 Trường hợp tham số được gán vào biến
 {% assign max_value = 5 %}
 {{ 10 | at_most: max_value }}
 {{ 3 | at_most: max_value }}
*/
/**
 * @link https://shopify.github.io/liquid/filters/at_most/
 */
var at_most = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "at_most",
    twigFilterName: "at_most",
  });
};
exports.at_most = at_most;
