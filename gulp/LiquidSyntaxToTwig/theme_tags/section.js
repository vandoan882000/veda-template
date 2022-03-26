"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.section = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "section",
    regex: /^section\s+(.+)$/,
    next: [],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.theme_tags.section"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
});
/**
 * TODO: Không thể làm được
 * @link https://shopify.dev/api/liquid/tags/theme-tags#section
 */
var section = function (liquid) {
  return liquid;
};
exports.section = section;
