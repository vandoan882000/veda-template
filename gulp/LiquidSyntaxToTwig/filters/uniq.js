"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uniq = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("uniq", function (value) {
  if (
    !Array.isArray(value) ||
    (Array.isArray(value) &&
      !value.every(function (item) {
        return typeof item === "string";
      }))
  ) {
    throw new Error(translation_1.i18n.t("twig_error.filters.uniq.value"));
  }
  try {
    var _value = Array.from(new Set(value));
    return JSON.stringify(_value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.uniq.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  {% assign products_unique = products | uniq %}
  {% for product in products_unique %}
    <p>{{ product }}</p>
  {% endfor %}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/uniq/
 */
var uniq = function (liquid) {
  return liquid;
};
exports.uniq = uniq;
