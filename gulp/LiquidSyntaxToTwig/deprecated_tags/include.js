"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.include = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "include",
    regex: /^include\s+(.+)$/,
    next: [],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.deprecated_tags.include"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
});
/**
 * @link https://shopify.dev/api/liquid/tags/deprecated-tags#include
 */
var include = function (liquid) {
  return liquid;
};
exports.include = include;
