"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asset_img_url = void 0;
var Twig = require("twig");
var translation_1 = require("../../translation");
Twig.extendFilter("asset_img_url", function () {
  throw new Error(translation_1.i18n.t("twig_error.filters.asset_img_url"));
});
/**
 * @link https://shopify.dev/api/liquid/filters/url-filters#asset_img_url
 */
// TODO: Chưa làm được cái này vì:
// 1. server không trả về được vì không có cái gì để bắn lên cho server biết
// 2. với FE thì không thể tự sinh đường dẫn vì version của file được sinh ngẫu nhiên chứ không theo 1 quy luật nào cả
var asset_img_url = function (liquid) {
  return liquid;
};
exports.asset_img_url = asset_img_url;
