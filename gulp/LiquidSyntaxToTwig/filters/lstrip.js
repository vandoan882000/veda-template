"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lstrip = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("lstrip", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.lstrip.value", {
        error_signal: value,
      })
    );
  try {
    return value.replace(/^\s+/, "");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.lstrip.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ '   too many spaces           ' | lstrip }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/lstrip/
 */
var lstrip = function (liquid) {
  return liquid;
};
exports.lstrip = lstrip;
