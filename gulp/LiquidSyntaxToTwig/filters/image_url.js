"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.image_url = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("image_url", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.image_url"));
});
/**
 * TODO: Trông có vẻ làm được nhưng có thực sự cần thiết???
 * @link https://shopify.dev/api/liquid/filters/url-filters#image_url
 */
var image_url = function (liquid) {
  return liquid;
};
exports.image_url = image_url;
