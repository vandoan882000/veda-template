"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url_for_type = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("url_for_type", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.url_for_type.value", {
        error_signal: value,
      })
    );
  try {
    return "/collections/types?q=".concat(value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.url_for_type.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ "Shopify" | url_for_type }}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign vendor = "Shopify" %}
 {{ vendor | url_for_type }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#url_for_type
 */
var url_for_type = function (liquid) {
  return liquid;
};
exports.url_for_type = url_for_type;
