"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.font_modify = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("font_modify", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.font_modify"));
});
/**
 * TODO: Chưa làm được cái này
 * @link https://shopify.dev/api/liquid/filters/font-filters#font_modify
 */
var font_modify = function (liquid) {
  return liquid;
};
exports.font_modify = font_modify;
