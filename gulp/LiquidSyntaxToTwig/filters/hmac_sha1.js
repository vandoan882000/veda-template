"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.hmac_sha1 = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("hmac_sha1", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.hmac_sha1"));
});
/**
 * TODO: Chưa làm cái này vì nom có vẻ không cần thiết và nếu làm thì phải cài thêm thư viện
 * @link https://shopify.dev/api/liquid/filters/string-filters#hmac_sha1
 */
var hmac_sha1 = function (liquid) {
  return liquid;
};
exports.hmac_sha1 = hmac_sha1;
