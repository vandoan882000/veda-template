"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.decrement = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "decrement",
    regex: /^decrement\s+(.+)$/,
    next: [],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.variable_tags.decrement"),
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
var decrement = function (liquid) {
  return liquid;
};
exports.decrement = decrement;
