"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.comment = void 0;
var getBOCsBetweenSomething_1 = require("../utils/getBOCsBetweenSomething");
/**
 * TODO: Không chắc chắn là sẽ chính xác hoàn toàn
 * @link https://shopify.dev/api/liquid/tags/theme-tags#comment
 */
var comment = function (liquid) {
    // @tuong -> có lẽ có thể xử lí những khối to nhất để tối ưu performance hơn
    var BOCs = (0, getBOCsBetweenSomething_1.getBOCsBetweenSomething)({ liquid: liquid, startBOC: new RegExp(/{%\s*comment/), endBOC: new RegExp(/{%\s*endcomment\s*%}/) });
    var _liquid = liquid;
    var _loop_1 = function () {
        var BOC = BOCs.shift();
        var _BOC = BOC.replace(/{%\s*comment\s*%}/, "{#").replace(/{%\s*endcomment\s*%}/, function () { return "#}"; });
        _liquid = _liquid.replace(BOC, _BOC);
        BOCs = BOCs.map(function (item) { return item.replace(BOC, _BOC); });
    };
    while (!!BOCs.length) {
        _loop_1();
    }
    return _liquid;
};
exports.comment = comment;
