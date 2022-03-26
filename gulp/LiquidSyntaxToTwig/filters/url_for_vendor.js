"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url_for_vendor = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("url_for_vendor", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.url_for_vendor.value", {
        error_signal: value,
      })
    );
  try {
    return "/collections/vendors?q=".concat(value);
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.url_for_vendor.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ "Shopify" | url_for_vendor }}
 ```

 ```ts
 Trường hợp tham số được gán vào biến
 {% assign vendor = "Shopify" %}
 {{ vendor | url_for_vendor }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#url_for_vendor
 */
var url_for_vendor = function (liquid) {
  return liquid;
};
exports.url_for_vendor = url_for_vendor;
