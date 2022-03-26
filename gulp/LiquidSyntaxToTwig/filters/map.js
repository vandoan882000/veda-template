"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.map = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("map", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.map.params"));
  var property = args[0];
  if (!property)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.map.property", {
        error_signal: property,
      })
    );
  if (!Array.isArray(value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.map.value", {
        error_signal: value,
      })
    );
  if (!value[0].hasOwnProperty(property)) {
    throw new Error(
      translation_1.i18n.t("twig_error.filters.map.property_non_exist", {
        error_signal: property,
      })
    );
  }
  try {
    var _value = value.filter(function (item) {
      return !!item[property];
    });
    return JSON.stringify(_value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.map.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  Trường hợp tham số không được gán vào biến
  {% assign products_available = products | map: 'available' %}
  {% for product in products_available %}
  <p>{{ product.title }}</p>
  {% endfor %}
 ```
 ```ts
  Trường hợp tham số được gán vào biến
  {% assign property_to_map = 'available' %}
  {% assign products_available = products | map: property_to_map %}
  {% for product in products_available %}
  <p>{{ product.title }}</p>
  {% endfor %}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/map/
 */
var map = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "map",
    twigFilterName: "map",
  });
};
exports.map = map;
