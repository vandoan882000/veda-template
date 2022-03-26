"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reversed = void 0;
var getBOCsBetweenSomething_1 = require("../utils/getBOCsBetweenSomething");
/**
 * @link https://shopify.github.io/liquid/tags/iteration/
 @example
 Input:
 {% for item in array reversed %}
  {{ item }}
{% endfor %}
Output:
 {% for item in array reverse %}
  {{ item }}
{% endfor %}
 */
var reversed = function (liquid) {
    // @tuong -> có lẽ có thể xử lí những khối to nhất để tối ưu performance hơn
    var BOCs = (0, getBOCsBetweenSomething_1.getBOCsBetweenSomething)({ liquid: liquid, startBOC: new RegExp(/{%\s*for/), endBOC: new RegExp(/{%\s*endfor\s*%}/) });
    var _liquid = liquid;
    var _loop_1 = function () {
        var BOC = BOCs.shift();
        var _BOC = BOC.replace(/reversed/gm, function () {
            return "| reverse";
        });
        _liquid = _liquid.replace(BOC, _BOC);
        BOCs = BOCs.map(function (item) { return item.replace(BOC, _BOC); });
    };
    while (!!BOCs.length) {
        _loop_1();
    }
    return _liquid;
};
exports.reversed = reversed;
