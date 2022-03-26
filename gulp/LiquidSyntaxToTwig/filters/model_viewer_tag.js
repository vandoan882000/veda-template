"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.model_viewer_tag = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("model_viewer_tag", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.model_viewer_tag"));
});
/**
 * TODO: Chưa làm được cái này nhưng nhìn có lẽ là khả thi để làm được
 * @link https://shopify.dev/api/liquid/filters/media-filters#model_viewer_tag
 */
var model_viewer_tag = function (liquid) {
  return liquid;
};
exports.model_viewer_tag = model_viewer_tag;
