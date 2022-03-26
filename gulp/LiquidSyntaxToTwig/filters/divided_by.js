"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.divided_by = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("divided_by", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.divided_by.params")
    );
  var divisor = args[0];
  var _divisor = Number(divisor);
  var _dividend = Number(value);
  if (isNaN(_divisor))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.divided_by.divisor", {
        error_signal: divisor,
      })
    );
  if (isNaN(_dividend))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.divided_by.value", {
        error_signal: value,
      })
    );
  try {
    return JSON.stringify(_dividend / _divisor);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.divided_by.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 100 | divided_by: 10}}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign divisor = 10 %}
 {{ 100 | divided_by: divisor}}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/divided_by/
 */
var divided_by = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "divided_by",
    twigFilterName: "divided_by",
  });
};
exports.divided_by = divided_by;
