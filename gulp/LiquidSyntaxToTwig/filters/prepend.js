"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.prepend = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
var Twig = require("twig");
Twig.extendFilter("prepend", function (value, args) {
  if (!args)
    throw new Error(translation_1.i18n.t("twig_error.filters.prepend.params"));
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.prepend.value", {
        error_signal: value,
      })
    );
  var str = args[0];
  try {
    return str + value;
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.prepend.example", {
        message: _err.message,
      })
    );
  }
});
/**
  ```ts
  Trường hợp tham số không được gán vào biến
  {% assign str = "apples, oranges, and bananas" | truncate: 10 | prepend: "Some fruit: " %}
  {{ "apples, oranges, and bananas" | prepend: "Some fruit: " | truncate: 10 }}
  ```

  ```ts
  Trường hợp tham số được gán vào biến
  {% assign prependStr = "Some fruit: " %}

  {% assign str = "apples, oranges, and bananas" | prepend: prependStr | truncate: 10 %}
  {{ "apples, oranges, and bananas" | truncate: 10 | prepend: prependStr }}
  ```
 */
/**
 * @link https://shopify.github.io/liquid/filters/prepend/
 */
var prepend = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "prepend",
    twigFilterName: "prepend",
  });
};
exports.prepend = prepend;
