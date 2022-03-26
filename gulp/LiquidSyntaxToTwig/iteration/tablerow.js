"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tablerow = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "tablerow",
    regex: /^tablerow\s+(.+)$/,
    next: ["endtablerow"],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.iteration.tablerow"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
  Twig.exports.extendTag({
    type: "endtablerow",
    regex: /^endtablerow$/,
    next: [],
    open: false,
  });
});
/**
 * @link https://shopify.github.io/liquid/tags/iteration/
 */
var tablerow = function (liquid) {
  return liquid;
};
exports.tablerow = tablerow;
