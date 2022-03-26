"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.color_modify = void 0;
var translation_1 = require("../../translation");
var color_1 = __importDefault(require("../libraries/color"));
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var domainValues = {
  red: [0, 255],
  green: [0, 255],
  blue: [0, 255],
  hue: [0, 360],
  sarutation: [0, 100],
};
var domainKeys = Object.keys(domainValues);
var Twig = require("twig");
Twig.extendFilter("color_modify", function (value, args) {
  if (!args)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_modify.params")
    );
  var key = args[0],
    newValue = args[1];
  var _key = key;
  var _newValue = Number(newValue);
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_modify.value", {
        error_signal: value,
      })
    );
  if (
    domainKeys.findIndex(function (item) {
      return item === _key;
    }) === -1
  )
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_modify.key", {
        error_signal: key,
      })
    );
  if (isNaN(_newValue))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.color_modify.newValue", {
        error_signal: newValue,
      })
    );
  var color = (0, color_1.default)(value);
  if (_key === "red") {
    if (_newValue < domainValues.red[0] || _newValue > domainValues.red[1]) {
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.redDomain", {
          error_signal: newValue,
        })
      );
    }
    try {
      return JSON.stringify(color.red(_newValue).toString());
    } catch (err) {
      var _err = err;
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.example", {
          message: _err.message,
        })
      );
    }
  }
  if (_key === "green") {
    if (
      _newValue < domainValues.green[0] ||
      _newValue > domainValues.green[1]
    ) {
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.greenDomain", {
          error_signal: newValue,
        })
      );
    }
    try {
      return JSON.stringify(color.green(_newValue).toString());
    } catch (err) {
      var _err = err;
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.example", {
          message: _err.message,
        })
      );
    }
  }
  if (_key === "blue") {
    if (_newValue < domainValues.blue[0] || _newValue > domainValues.blue[1]) {
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.blueDomain", {
          error_signal: newValue,
        })
      );
    }
    try {
      return JSON.stringify(color.blue(_newValue).toString());
    } catch (err) {
      var _err = err;
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.example", {
          message: _err.message,
        })
      );
    }
  }
  if (_key === "hue") {
    if (_newValue < domainValues.hue[0] || _newValue > domainValues.hue[1]) {
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.hueDomain", {
          error_signal: newValue,
        })
      );
    }
    try {
      return JSON.stringify(color.hue(_newValue).toString());
    } catch (err) {
      var _err = err;
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.example", {
          message: _err.message,
        })
      );
    }
  }
  if (_key === "sarutation") {
    if (
      _newValue < domainValues.sarutation[0] ||
      _newValue > domainValues.sarutation[1]
    ) {
      throw new Error(
        translation_1.i18n.t(
          "twig_error.filters.color_modify.saturationDomain",
          { error_signal: newValue }
        )
      );
    }
    try {
      return JSON.stringify(color.saturationl(_newValue / 100).toString());
    } catch (err) {
      var _err = err;
      throw new Error(
        translation_1.i18n.t("twig_error.filters.color_modify.example", {
          message: _err.message,
        })
      );
    }
  }
  return translation_1.i18n.t("twig_error.filters.color_modify.example", {
    message: "",
  });
});
/**
 ```ts
  Trường hợp tham số không được gán vào biến
  {{ '#7ab55c' | color_modify: 'red', 255 }}
  {{ '#7ab55c' | color_modify: 'alpha', 0.85 }}
 ```

 ```ts
  Trường hợp tham số được gán vào biến
  {% assign key = 'red' %}
  {% assign newValue = 255 %}
  {{ '#7ab55c' | color_modify: key, newValue }}


  {% assign key = 'alpha' %}
  {% assign newValue = 0.85 %}
  {{ '#7ab55c' | color_modify: 'alpha', 0.85 }}
 ```
 */
/**
 * FIXME: Định dạng color đang không trả giống với shopify. Liệu điều này có ổn ?????
 * @link https://shopify.dev/api/liquid/filters/color-filters#color_modify
 */
var color_modify = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "color_modify",
    twigFilterName: "color_modify",
  });
};
exports.color_modify = color_modify;
