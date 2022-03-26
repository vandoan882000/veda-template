"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64_url_safe_encode = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("base64_url_safe_encode", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.base64_url_safe_encode.value", {
        error_signal: value,
      })
    );
  try {
    return btoa(value)
      .replace(/\+/g, "-") // Convert '+' to '-'
      .replace(/\//g, "_") // Convert '/' to '_'
      .replace(/=+$/, ""); // Remove ending '=';
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t(
        "twig_error.filters.base64_url_safe_encode.example",
        { message: _err.message }
      )
    );
  }
});
/**
 ```ts
  {{ '<p>ok?</p>' | base64_url_safe_encode }} -> Expect: PHA-b2s_PC9wPg==
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/string-filters#base64_url_safe_encode
 */
var base64_url_safe_encode = function (liquid) {
  return liquid;
};
exports.base64_url_safe_encode = base64_url_safe_encode;
