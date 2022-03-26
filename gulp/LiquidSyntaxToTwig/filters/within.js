"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.within = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("within", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.within"));
});
/**
 * TODO: Không làm được cái này
 * @link https://shopify.dev/api/liquid/filters/url-filters#within
 */
var within = function (liquid) {
  return liquid;
};
exports.within = within;
