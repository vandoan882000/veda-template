"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.file_url = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("file_url", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.file_url"));
});
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#file_url
 */
// TODO: Chưa làm được cái này vì:
// 1. server không trả về được vì không có cái gì để bắn lên cho server biết
// 2. với FE thì không thể tự sinh đường dẫn vì version của file được sinh ngẫu nhiên chứ không theo 1 quy luật nào cả
var file_url = function (liquid) {
  return liquid;
};
exports.file_url = file_url;
