"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.minus = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("minus", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.minus.params"));
  var minus_number = args[0];
  var _minus_number = Number(minus_number);
  var _subtrahend = Number(value);
  if (isNaN(_subtrahend))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.minus.value", {
        error_signal: value,
      })
    );
  if (isNaN(_minus_number))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.minus.minus_number", {
        error_signal: minus_number,
      })
    );
  try {
    return JSON.stringify(_subtrahend - _minus_number);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.minus.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 100 | minus: 10}}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign minus_number = 10 %}
 {{ 100 | minus: minus_number}}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/minus/
 */
var minus = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "minus",
    twigFilterName: "minus",
  });
};
exports.minus = minus;
