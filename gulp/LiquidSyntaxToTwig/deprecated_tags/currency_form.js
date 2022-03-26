"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.currency_form = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "currency_form",
    regex: /^form\s(\'|\")currency(\'|\")\s+(.+)$/,
    next: ["endform"],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.deprecated_tags.currency_form"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
  Twig.exports.extendTag({
    type: "endform",
    regex: /^endform$/,
    next: [],
    open: false,
  });
});
/**
 * @link https://shopify.dev/api/liquid/tags/deprecated-tags#the-currency-form
 */
var currency_form = function (liquid) {
  return liquid;
};
exports.currency_form = currency_form;
