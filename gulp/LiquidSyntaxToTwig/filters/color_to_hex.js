"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_to_hex = void 0;
var translation_1 = require("../../translation");
var color_1 = __importDefault(require("../libraries/color"));
var Twig = require("twig");
Twig.extendFilter("color_to_hex", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_to_hex.value", {
        error_signal: value,
      })
    );
  var color = (0, color_1.default)(value);
  try {
    return color.hex();
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_to_hex.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  {{ 'rgb(122, 181, 92)' | color_to_hex }}
  {{ 'rgba(122, 181, 92, 0.5)' | color_to_hex }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_to_hex
 */
var color_to_hex = function (liquid) {
  return liquid;
};
exports.color_to_hex = color_to_hex;
