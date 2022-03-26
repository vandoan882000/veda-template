"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.raw = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "raw",
    regex: /^raw\s+(.+)$/,
    next: ["endraw"],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.theme_tags.raw"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
  Twig.exports.extendTag({
    type: "endraw",
    regex: /^endraw$/,
    next: [],
    open: false,
  });
});
/**
 * TODO: Chưa làm được
 * @link https://shopify.dev/api/liquid/tags/theme-tags#section
 */
var raw = function (liquid) {
  return liquid;
};
exports.raw = raw;
