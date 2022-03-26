"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.rstrip = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("rstrip", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.rstrip.value", {
        error_signal: value,
      })
    );
  try {
    return value.replace(/~+$/, "");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.rstrip.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ '              too many spaces      ' | rstrip }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/rstrip/
 */
var rstrip = function (liquid) {
  return liquid;
};
exports.rstrip = rstrip;
