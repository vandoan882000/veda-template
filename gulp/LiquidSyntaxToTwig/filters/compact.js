"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compact = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("compact", function (value) {
  if (!Array.isArray(value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.compact.value", {
        error_signal: value,
      })
    );
  var _value = value.filter(function (item) {
    return item !== null;
  });
  try {
    return JSON.stringify(_value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.compact.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  {% assign product_title_had_tags = products | map: "tags"  | compact %}
  {% for product in product_title_had_tags %}
    <p>{{ product }}</p>
  {% endfor %}
 ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/compact/
 */
var compact = function (liquid) {
  return liquid;
};
exports.compact = compact;
