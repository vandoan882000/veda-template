"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unless = void 0;
var getBOCsBetweenSomething_1 = require("../utils/getBOCsBetweenSomething");
var getMatches_1 = require("../utils/getMatches");
// var Twig = require("twig");
// Twig.extend(Twig => {
//   Twig.exports.extendTag({
//     type: 'unless',
//     regex: /^unless\s+(.+)$/,
//     next: ['endunless'],
//     open: true,
//     compile: function(token: any) {
//       return token;
//     },
//     parse: function() {
//       return {
//         output: `<span style='color: red; font-size: 18px'>${i18n.t('twig_error.control_flow.unless')}</span>`,
//         chain: false
//       };
//     },
//   });
//   Twig.exports.extendTag({
//     type: 'endunless',
//     regex: /^endunless$/,
//     next: [],
//     open: false,
//   });
// });
/**
 * TODO: Chưa test được tất cả các trường họp xuống dòng linh tinh, những thứ không bình thường, ...
 * @link https://shopify.github.io/liquid/tags/control-flow/
 @example
 Input:
  {% unless product.title == "Awesome Shoes" %}
    These shoes are not awesome.
  {% endunless %}
  {% unless product.title != "Awesome Shoes" %}
    These shoes are not awesome.
  {% endunless %}
  Output:
  {% if product.title != "Awesome Shoes" %}
    These shoes are not awesome.
  {% endif %}
  {% if product.title == "Awesome Shoes" %}
    These shoes are not awesome.
  {% endif %}
 */
var unless = function (liquid) {
  var _liquid = liquid;
  // @tuong -> cần xử lí nested nên phải bắt đầu từ cái nhỏ nhất trước vì mỗi unless cần 1 thứ là "condition clause" -> r cũng cần replace những khối con trong những BOCs to chứa khối con đó để có thể chạy đúng khi loop đến những BOCs to hơn
  var BOCs = (0, getBOCsBetweenSomething_1.getBOCsBetweenSomething)({
    liquid: liquid,
    startBOC: new RegExp(/{%\s*unless/),
    endBOC: new RegExp(/{%\s*endunless\s*%}/),
  });
  var _loop_1 = function () {
    var BOC = BOCs.shift();
    // Xử lí xuống dòng để có thể regex
    var _BOC = BOC.replace(/%}(?!\n)/gm, "%}\n").replace(
      /{%\s*endunless\s*%}/gm,
      "\n{% endunless %}"
    );
    // Lấy ra dòng code {% unless ... %}
    var line_of_code_start_unless = (0, getMatches_1.getMatches)(
      _BOC,
      new RegExp(/{%\s*unless.*%}/g)
    )[0];
    if (!line_of_code_start_unless) return "continue";
    // Xoá "{% unless" và "%}" để lấy ra đoạn code chứa mệnh đề so sánh
    var conditionClause = line_of_code_start_unless
      .replace(/{%\s*unless/gm, "")
      .replace(/%}/gm, "")
      .trim();
    // Trường hợp mệnh đề so sánh với 1 giá trị cụ thể
    if (conditionClause.includes("==") || conditionClause.includes("!=")) {
      // Xử lí đảo ngược mệnh đề so sánh và thay thế "unless" -> "if" và "endunless" -> "endif"
      _BOC = _BOC
        .replaceAll(
          line_of_code_start_unless,
          "{% if ".concat(
            conditionClause.replace(/(==|!=)/gm, function (value) {
              if (value === "==") return "!=";
              if (value === "!=") return "==";
              return "";
            }),
            " %}"
          )
        )
        .replace(/{%\s*endunless\s*%}/gm, "{% endif %}");
    }
    // Trường hợp mệnh đề so sánh với null value (tức không có dấu "==" hoặc "!=") -> {% if user %} ... {% endif %}
    else {
      // Thay thế toàn bộ dòng code {% unless ... %} vì không thể dùng lại được cái gì cả
      // https://twig.symfony.com/doc/1.x/tags/if.html -> đọc docs twig để có thể biết thêm chi tiết
      _BOC = _BOC
        .replaceAll(
          line_of_code_start_unless,
          "{% if not ".concat(conditionClause, " %}")
        )
        .replace(/{%\s*endunless\s*%}/gm, "{% endif %}");
    }
    _liquid = _liquid.replaceAll(BOC, _BOC);
    BOCs = BOCs.map(function (item) {
      return item.replaceAll(BOC, _BOC);
    });
  };
  while (!!BOCs.length) {
    _loop_1();
  }
  return _liquid;
};
exports.unless = unless;
