"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.placeholder_svg_tag = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("placeholder_svg_tag", function () {
  throw new Error(
    translation_1.i18n.t("twig_error.filters.placeholder_svg_tag")
  );
});
/**
 * TODO: Chưa làm được cái này
 * @link https://shopify.dev/api/liquid/filters/additional-filters#placeholder_svg_tag
 */
var placeholder_svg_tag = function (liquid) {
  return liquid;
};
exports.placeholder_svg_tag = placeholder_svg_tag;
