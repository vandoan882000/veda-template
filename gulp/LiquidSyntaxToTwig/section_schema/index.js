"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extend(function (Twig) {
  Twig.exports.extendTag({
    type: "schema",
    regex: /^schema\s+(.+)$/,
    next: ["endschema"],
    open: true,
    compile: function (token) {
      return token;
    },
    parse: function () {
      return {
        output: "<span style='color: red; font-size: 18px'>".concat(
          translation_1.i18n.t("twig_error.section_schema"),
          "</span>"
        ),
        chain: false,
      };
    },
  });
  Twig.exports.extendTag({
    type: "endschema",
    regex: /^endschema$/,
    next: [],
    open: false,
  });
});
/**
 * @link https://shopify.dev/themes/architecture/sections/section-schema
 */
var schema = function (liquid) {
  return liquid;
};
exports.schema = schema;
