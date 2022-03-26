"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.base64_decode = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
Twig.extendFilter("base64_decode", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.base64_decode.value", {
        error_signal: value,
      })
    );
  try {
    return atob(value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.base64_decode.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ 'b25lIHR3byB0aHJlZQ==' | base64_decode }} -> Expect: one two three
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/string-filters#base64_decode
 */
var base64_decode = function (liquid) {
  return liquid;
};
exports.base64_decode = base64_decode;
