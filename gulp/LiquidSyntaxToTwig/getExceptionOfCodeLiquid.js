"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getExceptionOfCodeLiquid = void 0;
var translation_1 = require("../translation");
var constants_1 = require("../constants/constants");
var const_1 = require("./const");
var getBOCsBetweenSomething_1 = require("./utils/getBOCsBetweenSomething");
var getExceptionOfCodeLiquid = function (liquid) {
  // eslint-disable-next-line @typescript-eslint/no-var-requires

  // TODO: @tuong -> Có thể optimize để lấy BOCS lớn nhất để có thể giảm bớt vòng lặp
  var liquidBOCs = (0, getBOCsBetweenSomething_1.getBOCsBetweenSomething)({
    liquid: liquid,
    startBOC: new RegExp("<".concat(constants_1.Consts.FakeTags.Shopify, ">")),
    endBOC: new RegExp("</".concat(constants_1.Consts.FakeTags.Shopify, ">")),
  });
  var _liquidRemoveShopifyTag = liquid;
  liquidBOCs.reverse().forEach(function (BOC) {
    return (_liquidRemoveShopifyTag = _liquidRemoveShopifyTag.replace(BOC, ""));
  });
  const_1.FILTERS_MUST_BE_IN_SHOPIFY_TAG.forEach(function (filter) {
    var isError = new RegExp(
      "({{|{%)(.*)\\|\\s*".concat(filter, "(?!\\w+)"),
      "gm"
    ).test(_liquidRemoveShopifyTag);
    if (isError)
      throw new Error(
        translation_1.i18n.t("twig_error.exeption_of_code_liquid.filter", {
          error_signal: filter,
        })
      );
  });
  const_1.OBJECT_MUST_BE_IN_SHOPIFY_TAG.forEach(function (object) {
    var isError = new RegExp("{{.*".concat(object, ".*}}"), "gm").test(
      _liquidRemoveShopifyTag
    );
    if (isError) throw new Error();
    if (isError)
      throw new Error(
        translation_1.i18n.t("twig_error.exeption_of_code_liquid.object", {
          error_signal: object,
        })
      );
  });
  // Dùng biến
  // TODO: @tuong -> Có thể optimize để lấy BOCS lớn nhất để có thể giảm bớt vòng lặp nhưng đoạn này đang check theo đoạn ngắn nhất nhiều khi sẽ nhanh hơn check cả cục
  var blockBOCs = (0, getBOCsBetweenSomething_1.getBOCsBetweenSomething)({
    liquid: liquid,
    startBOC: /{{|{%/,
    endBOC: /}}|%}/,
  });
  // Trường hợp dùng ảnh mà không có | img_url
  blockBOCs.forEach(function (BOC) {
    if (/\.src/.test(BOC) && !BOC.includes("img_url")) {
      throw new Error(
        translation_1.i18n.t("twig_error.exeption_of_code_liquid.img_url", {
          error_signal: BOC,
        })
      );
    }
  });
  return liquid;
};
exports.getExceptionOfCodeLiquid = getExceptionOfCodeLiquid;
