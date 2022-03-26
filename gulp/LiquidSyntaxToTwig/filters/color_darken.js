"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_darken = void 0;
var polished_1 = require("polished");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var domainValues = [0, 100];
var Twig = require("twig");
Twig.extendFilter("color_darken", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_darken.params")
    );
  var darkenValue = args[0];
  var _darkenValue = Number(darkenValue);
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_darken.value", {
        error_signal: value,
      })
    );
  if (isNaN(_darkenValue))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_darken.darkenValue", {
        error_signal: darkenValue,
      })
    );
  if (_darkenValue < domainValues[0] || _darkenValue > domainValues[1]) {
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_darken.darkenDomain", {
        error_signal: darkenValue,
      })
    );
  }
  try {
    return JSON.stringify((0, polished_1.darken)(_darkenValue / 100, value));
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_darken.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ '#7ab55c' | color_darken: 30 }}
 ```
*/
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_darken
 */
var color_darken = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "color_darken",
    twigFilterName: "color_darken",
  });
};
exports.color_darken = color_darken;
