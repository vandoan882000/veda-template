"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.t = void 0;
var ramda_1 = require("ramda");
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
/**
 * @link https://shopify.dev/api/liquid/filters/additional-filters#t-translation
 */
var t = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "t",
    twigFilterName: "t",
  });
};
exports.t = t;
