"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_contrast = void 0;
var polished_1 = require("polished");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("color_contrast", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_contrast.params")
    );
  var _color = args[0];
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_contrast.value", {
        error_signal: value,
      })
    );
  if (typeof _color !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_contrast.color", {
        error_signal: _color,
      })
    );
  try {
    return JSON.stringify((0, polished_1.getContrast)(value, _color));
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_contrast.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ '#495859' | color_contrast: '#fffffb' }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_contrast
 */
var color_contrast = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "color_contrast",
    twigFilterName: "color_contrast",
  });
};
exports.color_contrast = color_contrast;
