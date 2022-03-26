"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.date = void 0;
var strftime_1 = __importDefault(require("strftime"));
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var isValidDate = function (date) {
  return (
    new Date(date).toString() !== "Invalid Date" &&
    !isNaN(new Date(date).getTime())
  );
};
var Twig = require("twig");
Twig.extendFilter("date", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.date.params"));
  if (!isValidDate(value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.date.value", {
        error_signal: value,
      })
    );
  var format = args[0];
  if (!format)
    throw new Error(
      translation_1.i18n.t("twig_error.filters.date.format", {
        error_signal: format,
      })
    );
  try {
    return (0, strftime_1.default)(format, new Date(value));
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.date.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
 {{ article.published_at | date: "%a, %b %d, %y" }}
 {{ "March 14, 2016" | date: "%b %d, %y" }}
 ```
 */
/**
 * @link https://shopify.dev/api/liquid/filters/additional-filters#date
 */
var date = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "date",
    twigFilterName: "date",
  });
};
exports.date = date;
