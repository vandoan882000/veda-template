"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sort = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("sort", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.sort.params"));
  var property = args[0];
  if (!Array.isArray(value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.sort.value", {
        error_signal: JSON.stringify(value),
      })
    );
  if (
    !!property &&
    typeof value[0] === "object" &&
    !value[0].hasOwnProperty(property)
  )
    throw new Error(
      translation_1.i18n.t("twig_error.filters.sort.property_non_exist")
    );
  try {
    if (property) {
      return JSON.stringify(
        value.sort(function (a, b) {
          return a[property] - b[property];
        })
      );
    }
    return JSON.stringify(value.sort());
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.sort.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  Trường hợp tham số không được gán vào biến
  {% assign collections = collections | sort: 'published_at' | slice: 0, 10 %}
  {{ collections | sort: 'published_at'| slice: 10 }}
 ```
 ```ts
  Trường hợp tham số được gán vào biến
  {% assign field = published_at %}
  {% assign collections = collections | slice: 0, 10 | sort: field %}
  {{ collections | slice: 0, 10 | sort: field }}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/sort/
 */
var sort = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "sort",
    twigFilterName: "sort",
  });
};
exports.sort = sort;
