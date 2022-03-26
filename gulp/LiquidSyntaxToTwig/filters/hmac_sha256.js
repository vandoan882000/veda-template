"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmac_sha256 = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("hmac_sha256", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.hmac_sha256"));
});
/**
 * TODO: Chưa làm cái này vì nom có vẻ không cần thiết và nếu làm thì phải cài thêm thư viện
 * @link https://shopify.dev/api/liquid/filters/string-filters#hmac_sha256
 */
var hmac_sha256 = function (liquid) {
  return liquid;
};
exports.hmac_sha256 = hmac_sha256;
