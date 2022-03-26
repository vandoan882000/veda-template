"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_desaturate = void 0;
var polished_1 = require("polished");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var domainValues = [0, 100];
var Twig = require("twig");
Twig.extendFilter("color_desaturate", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_desaturate.params")
    );
  var desaturateValue = args[0];
  var _desaturateValue = Number(desaturateValue);
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_desaturate.value", {
        error_signal: value,
      })
    );
  if (isNaN(_desaturateValue))
    throw new Error(
      translation_1.i18n.t(
        "twig_error.filters.color_desaturate.desaturateValue",
        { error_signal: desaturateValue }
      )
    );
  if (
    _desaturateValue < domainValues[0] ||
    _desaturateValue > domainValues[1]
  ) {
    throw new Error(
      translation_1.i18n.t(
        "twig_error.filters.color_desaturate.desaturateDomain",
        { error_signal: desaturateValue }
      )
    );
  }
  try {
    return JSON.stringify(
      (0, polished_1.desaturate)(_desaturateValue / 100, value)
    );
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_desaturate.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ '#7ab55c' | color_desaturate: 30 }}
 ```
*/
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_desaturate
 */
var color_desaturate = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "color_desaturate",
    twigFilterName: "color_desaturate",
  });
};
exports.color_desaturate = color_desaturate;
