"use strict";
/**
 * @link https://shopify.dev/api/liquid/objects#powered_by_link
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.powered_by_link = void 0;
var powered_by_link = function (liquid) {
    return liquid.replace(/{{\s*powered_by_link\s*}}/, function () {
        return "<a target=\"_blank\" rel=\"nofollow noopener\" href=\"https://www.shopify.com?utm_campaign=poweredby&amp;utm_medium=shopify&amp;utm_source=onlinestore\" aria-describedby=\"a11y-new-window-external-message\">Powered by Shopify</a>";
    });
};
exports.powered_by_link = powered_by_link;
