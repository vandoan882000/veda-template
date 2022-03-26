"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.url_param_escape = void 0;
/**
 ```ts
 {{ '<hello> & <shopify>' | url_param_escape }}
 ```
 */
/**
 *
 * TODO: Chưa chắc chắn chính xác và Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.dev/api/liquid/filters/string-filters#url_param_escape
 */
var url_param_escape = function (liquid) {
    return liquid.replace(/\|\s*url_param_escape\s*/gm, function () {
        return "| escape('url')";
    });
};
exports.url_param_escape = url_param_escape;
