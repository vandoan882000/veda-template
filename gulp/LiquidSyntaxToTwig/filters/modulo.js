"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.modulo = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("modulo", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.modulo.params"));
  var modulo_number = args[0];
  var _modulo_number = Number(modulo_number);
  var _dividend = Number(value);
  if (isNaN(_dividend))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.modulo.value", {
        error_signal: value,
      })
    );
  if (isNaN(_modulo_number))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.modulo.modulo_number", {
        error_signal: modulo_number,
      })
    );
  try {
    return JSON.stringify(_dividend % _modulo_number);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.modulo.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ 100 | modulo: 10}}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign modulo_number = 10 %}
 {{ 100 | modulo: modulo_number}}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/modulo/
 */
var modulo = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "modulo",
    twigFilterName: "modulo",
  });
};
exports.modulo = modulo;
