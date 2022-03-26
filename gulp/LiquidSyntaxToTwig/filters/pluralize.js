"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.pluralize = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("pluralize", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.pluralize.params")
    );
  var _value = Number(value);
  var singular = args[0],
    plural = args[1];
  if (isNaN(_value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.pluralize.value", {
        error_signal: value,
      })
    );
  if (!singular)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.pluralize.singular")
    );
  if (!plural)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.pluralize.plural")
    );
  try {
    return _value >= 2 ? plural : singular;
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.pluralize.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```
 ts{{ cart.item_count }}
 {{ cart.item_count | pluralize: 'item', 'items' }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/string-filters#pluralize
 */
var pluralize = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "pluralize",
    twigFilterName: "pluralize",
  });
};
exports.pluralize = pluralize;
