"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64_url_safe_decode = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
Twig.extendFilter("base64_url_safe_decode", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.base64_url_safe_decode.value", {
        error_signal: value,
      })
    );
  try {
    return atob(value)
      .replace(/\-/g, "+") // Convert '-' to '+'
      .replace(/\_/g, "/"); // Convert '_' to '/'
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t(
        "twig_error.filters.base64_url_safe_decode.example",
        { message: _err.message }
      )
    );
  }
});
/**
 ```ts
  {{ 'PHA-b2s_PC9wPg==' | base64_url_safe_decode }} -> Expect: <p>ok?</p>
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/string-filters#base64_url_safe_decode
 */
var base64_url_safe_decode = function (liquid) {
  return liquid;
};
exports.base64_url_safe_decode = base64_url_safe_decode;
