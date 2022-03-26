"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment_type_img_url = void 0;
var translation_1 = require("../../translation");
var TYPES = {
  visa: "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/visa-319d545c6fd255c9aad5eeaad21fd6f7f7b4fdbdb1a35ce83b89cca12a187f00.svg",
  master:
    "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/master-173035bc8124581983d4efa50cf8626e8553c2b311353fbf67485f9c1a2b88d1.svg",
  american_express:
    "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/american_express-2264c9b8b57b23b0b0831827e90cd7bcda2836adc42a912ebedf545dead35b20.svg",
  paypal:
    "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/paypal-49e4c1e03244b6d2de0d270ca0d22dd15da6e92cc7266e93eb43762df5aa355d.svg",
  diners_club:
    "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/diners_club-16436b9fb6dd9060edb51f1c7c44e23941e544ad798282d6aef1604319562fba.svg",
  discover:
    "https://cdn.shopify.com/shopifycloud/shopify/assets/payment_icons/discover-cc9808e50193c7496e7a5245eb86d5e06f02e2476c0fe70f2c40016707d35461.svg",
};
var Twig = require("twig");
Twig.extendFilter("payment_type_img_url", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.payment_type_img_url.value", {
        error_signal: value,
      })
    );
  var imgUrl = TYPES[value];
  if (!imgUrl)
    throw new Error(
      translation_1.i18n.t(
        "twig_error.filters.payment_type_img_url.domain_value",
        { domain_value: Object.keys(TYPES).join(", ") }
      )
    );
  return imgUrl;
});
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#payment_type_img_url
 */
var payment_type_img_url = function (liquid) {
  return liquid;
};
exports.payment_type_img_url = payment_type_img_url;
