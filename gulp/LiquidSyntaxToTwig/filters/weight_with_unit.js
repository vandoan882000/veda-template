"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.weight_with_unit = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
/**
 ```ts
 {{ variant.weight | weight_with_unit: variant.weight_unit }}
 {{ product.variants.first.weight | weight_with_unit }}
 ```
 */
/**
 * TODO: Không chắc chắn chính xác
 * @link https://shopify.dev/api/liquid/filters/additional-filters#weight_with_unit
 */
var weight_with_unit = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "weight_with_unit",
    twigFilterName: "weight_with_unit",
  });
};
exports.weight_with_unit = weight_with_unit;
