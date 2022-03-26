"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64_encode = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
Twig.extendFilter("base64_encode", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.base64_encode.value", {
        error_signal: value,
      })
    );
  try {
    return btoa(value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.base64_encode.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ 'one two three' | base64_encode }} -> Expect: b25lIHR3byB0aHJlZQ==
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/string-filters#base64_encode
 */
var base64_encode = function (liquid) {
  return liquid;
};
exports.base64_encode = base64_encode;
