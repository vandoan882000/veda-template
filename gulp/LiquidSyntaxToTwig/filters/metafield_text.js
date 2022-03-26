"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metafield_text = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("metafield_text", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.metafield_text"));
});
/**
 * TODO: Chưa làm được cái này nhưng nhìn có lẽ là khả thi để làm được
 * @link https://shopify.dev/api/liquid/filters/media-filters#media_text
 */
var metafield_text = function (liquid) {
  return liquid;
};
exports.metafield_text = metafield_text;
