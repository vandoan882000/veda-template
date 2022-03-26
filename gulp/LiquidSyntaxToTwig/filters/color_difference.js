"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_difference = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("color_difference", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.color_difference"));
});
/**
 * TODO: Có thể làm cái này bằng https://www.npmjs.com/package/colorizr hoặc https://www.npmjs.com/package/color-difference nhưng có lẽ là chưa cần thiết
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_difference
 */
var color_difference = function (liquid) {
  return liquid;
};
exports.color_difference = color_difference;
