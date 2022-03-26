"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.font_face = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("font_face", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.font_face"));
});
/**
 * TODO: Chưa làm được cái này
 * @link https://shopify.dev/api/liquid/filters/font-filters#font_face
 */
var font_face = function (liquid) {
  return liquid;
};
exports.font_face = font_face;
