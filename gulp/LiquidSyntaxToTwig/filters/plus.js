"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plus = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("plus", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.plus.params"));
  var number2 = args[0];
  var _number2 = Number(number2);
  var _number1 = Number(value);
  if (isNaN(_number1))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.plus.value", {
        error_signal: value,
      })
    );
  if (isNaN(_number1))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.plus.number2", {
        error_signal: number2,
      })
    );
  try {
    return JSON.stringify(_number1 + _number2);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.plus.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 100 | plus: 10}}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign number2 = 10 %}
 {{ 100 | plus: number2}}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/plus/
 */
var plus = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "plus",
    twigFilterName: "plus",
  });
};
exports.plus = plus;
