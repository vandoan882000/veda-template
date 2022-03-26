"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url_escape = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("url_escape", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.url_escape.value", {
        error_signal: value,
      })
    );
  try {
    return window.encodeURIComponent(value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.url_escape.example", {
        message: _err.message,
      })
    );
  }
});
/**
 {{ '<hello> & <shopify>' | url_escape }}
 */
/**
 * @link https://shopify.dev/api/liquid/filters/string-filters#url_escape
 */
var url_escape = function (liquid) {
  return liquid;
};
exports.url_escape = url_escape;
