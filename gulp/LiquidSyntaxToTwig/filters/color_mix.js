"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_mix = void 0;
var translation_1 = require("../../translation");
var color_1 = __importDefault(require("../libraries/color"));
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var domainValues = [0, 100];
var Twig = require("twig");
Twig.extendFilter("color_mix", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_mix.params")
    );
  var _colorValue = args[0],
    weightValue = args[1];
  var _weightValue = Number(weightValue);
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_mix.value", {
        error_signal: value,
      })
    );
  if (typeof _colorValue !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_mix.colorValue", {
        error_signal: _colorValue,
      })
    );
  if (isNaN(_weightValue))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_mix.weightValue", {
        error_signal: weightValue,
      })
    );
  var color = (0, color_1.default)(value);
  if (_weightValue < domainValues[0] || _weightValue > domainValues[1]) {
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_mix.weightDomain", {
        error_signal: weightValue,
      })
    );
  }
  try {
    return JSON.stringify(
      color
        .mix((0, color_1.default)(_colorValue), _weightValue / 100)
        .toString()
    );
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_mix.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 Trường hợp tham số không được gán vào biến
 {{ '#7ab55c' | color_mix: '#ffc0cb', 50 }}
 ```
 */
/**
 * FIXME: Định dạng color đang không trả giống với shopify. Liệu điều này có ổn ?????
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_mix
 */
var color_mix = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "color_mix",
    twigFilterName: "color_mix",
  });
};
exports.color_mix = color_mix;
