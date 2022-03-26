"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort_by = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("sort_by", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.sort_by.params"));
  var sort_by = args[0];
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.sort_by.value", {
        error_signal: value,
      })
    );
  try {
    return value.concat("?sort_by=".concat(sort_by));
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.sort_by.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ collection.url | sort_by: 'best-selling' }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#sort_by
 */
var sort_by = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "sort_by",
    twigFilterName: "sort_by",
  });
};
exports.sort_by = sort_by;
