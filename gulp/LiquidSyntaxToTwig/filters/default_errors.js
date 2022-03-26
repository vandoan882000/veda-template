"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default_errors = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("default_errors", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.default_errors"));
});
/**
 * TODO: Chưa được làm cái này
 * @link https://shopify.dev/api/liquid/filters/additional-filters#default_errors
 */
var default_errors = function (liquid) {
  return liquid;
};
exports.default_errors = default_errors;
