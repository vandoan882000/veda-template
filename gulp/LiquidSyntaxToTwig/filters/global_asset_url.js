"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.global_asset_url = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("global_asset_url", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.global_asset_url"));
});
/**
 * TODO: Chưa làm được cái này
 * @link https://shopify.dev/api/liquid/filters/url-filters#global_asset_url
 */
var global_asset_url = function (liquid) {
  return liquid;
};
exports.global_asset_url = global_asset_url;
