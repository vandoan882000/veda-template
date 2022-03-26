"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_brightness = void 0;
var polished_1 = require("polished");
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("color_brightness", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_brightness.value", {
        error_signal: value,
      })
    );
  try {
    var _a = (0, polished_1.parseToRgb)(value),
      red = _a.red,
      green = _a.green,
      blue = _a.blue;
    var brightness = (red * 299 + green * 587 + blue * 114) / 1000;
    return JSON.stringify(brightness);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_brightness.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ '#7ab55c' | color_brightness }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_brightness
 */
var color_brightness = function (liquid) {
  return liquid;
};
exports.color_brightness = color_brightness;
