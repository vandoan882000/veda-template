"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.time_tag = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("time_tag", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.time_tag"));
});
/**
 * TODO: Trông có vẻ làm được nhưng có thực sự cần thiết???
 * @link https://shopify.dev/api/liquid/filters/html-filters#time_tag
 */
var time_tag = function (liquid) {
  return liquid;
};
exports.time_tag = time_tag;
