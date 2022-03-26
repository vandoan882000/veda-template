"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shopify_asset_url = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("shopify_asset_url", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.shopify_asset_url"));
});
/**
 * TODO: Chưa làm được cái này
 * @link https://shopify.dev/api/liquid/filters/url-filters#shopify_asset_url
 */
var shopify_asset_url = function (liquid) {
  return liquid;
};
exports.shopify_asset_url = shopify_asset_url;
