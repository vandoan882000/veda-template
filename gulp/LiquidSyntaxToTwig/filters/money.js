"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.money = void 0;
var translation_1 = require("../../translation");
var Twig = require("twig");
Twig.extendFilter("money_without_currency", function (value) {
  var _value = Number(value);
  if (isNaN(_value))
    throw new Error(
      translation_1.i18n.t("twig_error.filters.money.value", {
        error_signal: value,
      })
    );
  try {
    return (_value / 100).toString();
  } catch (err) {
    var _err = err;
    throw new Error(
      translation_1.i18n.t("twig_error.filters.money.money_without_currency", {
        message: _err.message,
      })
    );
  }
});
/**
  ```ts
  <del class="cart-item__original-price">{{ item.original_price }}</del>
  <del class="cart-item__original-price">{{ item.original_price | money_with_currency }}</del>
  <del class="cart-item__original-price">{{ item.original_price | money_without_trailing_zeros }}</del>
  <span class="order-discount cart-item__price">{{ item.final_price | money_without_currency }}</span>
  {{ 145 | money }}
  {{ 145 | money_with_currency }}
  {{ 2000 | money_without_trailing_zeros }}
  {{ 145 | money_without_trailing_zeros }}
  {{ 145 | money_without_currency }}
  ```
*/
/**
 * @link https://shopify.dev/api/liquid/filters/money-filters#money
 */
var money = function (liquid) {
  return liquid;
};
exports.money = money;
