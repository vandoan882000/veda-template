"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.img_url = void 0;
var translation_1 = require("../../translation");
var liquidFilterParamsToTwigFilterParams_1 = require("../utils/liquidFilterParamsToTwigFilterParams");
// NOTE: @tuong -> có thể custom cái này như của liquid
// Check nếu value truyền vào là 1 object (tức featured_image, image, ...) thì sử dụng .src
// Lúc đó thì có thể như liquid (featured_image | img_url hoặc featured_image.src | img_url đều đúng)
var Twig = require("twig");
Twig.extendFilter("img_url", function (value, args) {
  var size = Array.isArray(args) ? args[0] : "small";
  if (typeof size !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.img_url.size", {
        error_signal: JSON.stringify(size),
      })
    );
  if (typeof value !== "string")
    throw new Error(
      translation_1.i18n.t("twig_error.filters.img_url.value", {
        error_signal: value,
      })
    );
  try {
    return value.replace(/.(jpg|jpeg|png|gif)/gm, function (img_extension) {
      return "_".concat(size).concat(img_extension);
    });
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.img_url.example", {
        message: _err.message,
      })
    );
  }
});
/**
 * ```ts
  <div class="collection-grid-item__image lazyload"
    data-bgset="{% include 'bgset', image: collection_image %}"
    data-sizes="auto"
    data-parent-fit="cover"
    style="background-image: url('{{ collection_image | img_url: '400x400', crop: 'bottom', scale: 2, format: 'pjpg' | abc | abc1 | abc2 }});"
  >
  </div>
  {% assign abc = product.featured_image | img_url: '300x300' | append: "Hello" %}
  <img src="{{ product.featured_image | img_url: '300x300' | append: "Hello" }}" />
  ```
 */
/**
 * TODO: Theo docs những cái này đã bị deprecated
 * @link https://shopify.dev/api/liquid/filters/deprecated-filters#url-filters
 */
var img_url = function (liquid) {
  return (0,
  liquidFilterParamsToTwigFilterParams_1.liquidFilterParamsToTwigFilterParams)({
    liquid: liquid,
    liquidFilterName: "img_url",
    twigFilterName: "img_url",
  });
};
exports.img_url = img_url;
