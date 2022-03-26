"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncatewords = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("truncatewords", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.truncatewords.params")
    );
  var quantityWords = args[0],
    truncater = args[1];
  var _quantityWords = Number(quantityWords);
  var _truncater = String(
    truncater !== null && truncater !== void 0 ? truncater : "..."
  );
  var _value = value;
  if (typeof _value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.truncatewords.value", {
        error_signal: value,
      })
    );
  if (isNaN(_quantityWords))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.truncatewords.quantity_words", {
        error_signal: quantityWords,
      })
    );
  try {
    return _value
      .split(" ")
      .slice(0, _quantityWords - 1)
      .join(" ")
      .concat(_truncater);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.truncatewords.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ 'The cat came back the very next day' | truncatewords: 4 }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/truncatewords/
 */
var truncatewords = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "truncatewords",
    twigFilterName: "truncatewords",
  });
};
exports.truncatewords = truncatewords;
