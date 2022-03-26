"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metafield_tag = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("metafield_tag", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.metafield_tag"));
});
/**
 * TODO: Trông có vẻ làm được nhưng có thực sự cần thiết???
 * @link https://shopify.dev/api/liquid/filters/metafield-filters#metafield_tag
 */
var metafield_tag = function (liquid) {
  return liquid;
};
exports.metafield_tag = metafield_tag;
