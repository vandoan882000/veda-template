"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleize = exports.handle = void 0;
var translation_1 = require("../../translation");
var hyphen = "-"; // Sv sẽ trả về
var Twig = require("twig");
Twig.extendFilter("handle", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.handle.value", {
        error_signal: value,
      })
    );
  try {
    return value
      .toLowerCase()
      .replace(/[^A-Z0-9]/gi, hyphen)
      .replace(new RegExp("".concat(hyphen, "+"), "g"), hyphen)
      .replace(/-$/, "");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.handle.example", {
        message: _err.message,
      })
    );
  }
});
var Twig = require("twig");
Twig.extendFilter("handleize", function (value) {
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.handle.value", {
        error_signal: value,
      })
    );
  try {
    return value
      .toLowerCase()
      .replace(/[^A-Z0-9]/gi, hyphen)
      .replace(new RegExp("".concat(hyphen, "+"), "g"), hyphen)
      .replace(/-$/, "");
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.handle.example", {
        message: _err.message,
      })
    );
  }
});
/**
 ```ts
  {{ '100% M & Ms!!!' | handle }} -> Expect: 100-m-ms
 ```
 */
var handle = function (liquid) {
  return liquid;
};
exports.handle = handle;
/**
 ```ts
  {{ '100% M & Ms!!!' | handleize }} -> Expect: 100-m-ms
 ```
 */
/**
 * TODO: Chưa hoàn thiện
 * @link https://shopify.dev/api/liquid/filters/string-filters#handle-handleize
 */
var handleize = function (liquid) {
  return liquid;
};
exports.handleize = handleize;
