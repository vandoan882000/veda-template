"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_to_rgb = void 0;
var polished_1 = require("polished");
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("color_to_rgb", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_to_rgb.value", {
        error_signal: value,
      })
    );
  var _a = (0, polished_1.parseToRgb)(value),
    red = _a.red,
    green = _a.green,
    blue = _a.blue;
  try {
    return "rgb(".concat(red, ", ").concat(green, ", ").concat(blue, ")");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_to_rgb.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ '#7ab55c' | color_to_rgb }}
 {{ 'hsla(100, 38%, 54%, 0.5)' | color_to_rgb }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_to_rgb
 */
var color_to_rgb = function (liquid) {
  return liquid;
};
exports.color_to_rgb = color_to_rgb;
