"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.highlight = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("highlight", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.highlight"));
});
/**
 * TODO: Chưa làm được cái này
 * @link https://shopify.dev/api/liquid/filters/additional-filters#highlight
 */
var highlight = function (liquid) {
  return liquid;
};
exports.highlight = highlight;
