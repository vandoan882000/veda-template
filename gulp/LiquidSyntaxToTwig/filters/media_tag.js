"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.media_tag = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("media_tag", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.media_tag"));
});
/**
 * TODO: Chưa làm được cái này nhưng nhìn có lẽ là khả thi để làm được
 * @link https://shopify.dev/api/liquid/filters/media-filters#media_tag
 */
var media_tag = function (liquid) {
  return liquid;
};
exports.media_tag = media_tag;
