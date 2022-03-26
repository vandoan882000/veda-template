"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_to_hsl = void 0;
var translation_1 = require("../../translation");
var color_1 = __importDefault(require("../libraries/color"));
var Twig = require("twig");
Twig.extendFilter("color_to_hsl", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_to_hsl.value")
    );
  var color = (0, color_1.default)(value);
  try {
    return color.hsl().toString();
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_to_hsl.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ '#7ab55c' | color_to_hsl }}
 {{ 'rgba(122, 181, 92, 0.5)' | color_to_hsl }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_to_hsl
 */
var color_to_hsl = function (liquid) {
  return liquid;
};
exports.color_to_hsl = color_to_hsl;
