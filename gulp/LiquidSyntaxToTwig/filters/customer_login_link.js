"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer_login_link = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("customer_login_link", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.customer_login_link.value", {
        error_signal: value,
      })
    );
  try {
    return '<a href="/account/login" id="customer_login_link">'.concat(
      value,
      "</a>"
    );
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.customer_login_link.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  {{ 'Log in' | customer_login_link }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#customer_login_link
 */
var customer_login_link = function (liquid) {
  return liquid;
};
exports.customer_login_link = customer_login_link;
