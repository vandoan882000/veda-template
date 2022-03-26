"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.brightness_difference = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("brightness_difference", function () {
  throw new Error(
    translation_1.i18n.t("twig_error.filters.brightness_difference")
  );
});
/**
 * TODO: Có thể làm cái này bằng https://www.npmjs.com/package/colorizr nhưng có lẽ là chưa cần thiết
 * @link https://shopify.dev/api/liquid/filters/color-filters#brightness_difference
 */
var brightness_difference = function (liquid) {
  return liquid;
};
exports.brightness_difference = brightness_difference;
