"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.remove_first = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("remove_first", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.remove_first.params")
    );
  var substr = args[0];
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.remove_first.value", {
        error_signal: value,
      })
    );
  try {
    return value.replace(substr, "");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.remove_first.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ 'Hello, world. Goodbye, world.' | remove_first: 'world' }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/remove_first/
 */
var remove_first = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "remove_first",
    twigFilterName: "remove_first",
  });
};
exports.remove_first = remove_first;
