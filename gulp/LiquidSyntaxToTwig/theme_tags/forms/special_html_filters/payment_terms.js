"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.payment_terms = void 0;
/**
 * TODO: Không chắn chắn chính xác vì docs không rõ ràng
 * @link https://shopify.dev/api/liquid/filters/html-filters#payment_terms
 */
var payment_terms = function (liquid) {
    return liquid.replace(/{{\s*form\s*\|\s*payment_terms\s*}}/gm, function () {
        return "\n    <shopify-payment-terms variant-id=\"...\" shopify-meta=\"...\">\n\n    </shopify-payment-terms>\n  ";
    });
};
exports.payment_terms = payment_terms;
