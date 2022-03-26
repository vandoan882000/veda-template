"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_lighten = void 0;
var polished_1 = require("polished");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("color_lighten", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_lighten.params")
    );
  var lightenValue = args[0];
  var _lightenValue = Number(lightenValue);
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_lighten.value", {
        error_signal: value,
      })
    );
  if (isNaN(_lightenValue))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_lighten.lightenValue", {
        error_signal: lightenValue,
      })
    );
  try {
    return JSON.stringify((0, polished_1.lighten)(_lightenValue / 100, value));
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_lighten.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ '#7ab55c' | color_lighten: 30 }}
 ```
*/
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_lighten
 */
var color_lighten = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "color_lighten",
    twigFilterName: "color_lighten",
  });
};
exports.color_lighten = color_lighten;
