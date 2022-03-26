"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.where = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("where", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.where.params"));
  var property = args[0],
    objectPropertyValue = args[1];
  if (!property)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.where.property", {
        error_signal: property,
      })
    );
  if (!Array.isArray(value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.where.value", {
        error_signal: value,
      })
    );
  if (!value[0].hasOwnProperty(property)) {
    throw new Error(
      translation_1.i18n.t("twig_error.filters.where.property_non_exist", {
        error_signal: property,
      })
    );
  }
  try {
    var _value = value.filter(function (item) {
      return objectPropertyValue
        ? item[property] === objectPropertyValue
        : !!item[property];
    });
    return JSON.stringify(_value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.where.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  Trường hợp tham số không được gán vào biến
  {% assign products_available = products | where: 'available', true %}
  {% for product in products_available %}
    <p>{{ product.title }}</p>
  {% endfor %}
 ```
 ```ts
  Trường hợp tham số được gán vào biến
  {% assign property = 'available' %}
  {% assign value = true %}
  {% assign products_available = products | where: property, value %}
  {% for product in products_available %}
    <p>{{ product.title }}</p>
  {% endfor %}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/where/
 */
var where = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "where",
    twigFilterName: "where",
  });
};
exports.where = where;
