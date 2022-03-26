"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newline_to_br = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("newline_to_br", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.newline_to_br.value", {
        error_signal: value,
      })
    );
  try {
    return value.replaceAll("\n", "<br>");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.newline_to_br.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {% capture var %}
  One
  Two
  Three
 {% endcapture %}
 {{ var | newline_to_br }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/newline_to_br/
 */
var newline_to_br = function (liquid) {
  return liquid;
};
exports.newline_to_br = newline_to_br;
