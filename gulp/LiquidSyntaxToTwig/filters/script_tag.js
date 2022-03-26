"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.script_tag = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("script_tag", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.script_tag"));
});
/**
 * @link https://shopify.dev/api/liquid/filters/html-filters#script_tag
 */
// TODO: Chưa làm được cái này vì:
// 1. server không trả về được vì không có cái gì để bắn lên cho server biết
// 2. với FE thì không thể tự sinh đường dẫn vì version của file được sinh ngẫu nhiên chứ không theo 1 quy luật nào cả
var script_tag = function (liquid) {
  return liquid;
};
exports.script_tag = script_tag;
