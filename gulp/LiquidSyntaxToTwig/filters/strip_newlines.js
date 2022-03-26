"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.strip_newlines = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("strip_newlines", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.strip_newlines.value", {
        error_signal: value,
      })
    );
  try {
    return value.replaceAll("\n", "");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.strip_newlines.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ product.description | strip_newlines }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/strip_newlines/
 */
var strip_newlines = function (liquid) {
  return liquid;
};
exports.strip_newlines = strip_newlines;
