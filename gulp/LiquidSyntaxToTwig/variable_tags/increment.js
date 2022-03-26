"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.increment = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "increment",
    regex: /^increment\s+(.+)$/,
    next: [],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.variable_tags.increment"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
});
/**
 * @link https://shopify.github.io/liquid/tags/variable/
 */
var increment = function (liquid) {
  return liquid;
};
exports.increment = increment;
