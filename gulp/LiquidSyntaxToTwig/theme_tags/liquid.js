"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liquid = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "liquid",
    regex: /^liquid\s+(.+)$/,
    next: [],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.theme_tags.liquid"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
});
/**
 * TODO: Có lẽ không thể làm được
 * @link https://shopify.dev/api/liquid/tags/theme-tags#liquid
 */
var liquid = function (liquid) {
  return liquid;
};
exports.liquid = liquid;
