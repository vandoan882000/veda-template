"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.md5 = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("md5", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.md5"));
});
/**
 * TODO: Chưa làm cái này vì nom có vẻ không cần thiết và nếu làm thì phải cài thêm thư viện
 * @link https://shopify.dev/api/liquid/filters/string-filters#md5
 */
var md5 = function (liquid) {
  return liquid;
};
exports.md5 = md5;
