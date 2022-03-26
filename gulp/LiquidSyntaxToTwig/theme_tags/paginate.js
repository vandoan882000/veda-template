"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.paginate = void 0;
var strToRegexpPattern_1 = __importDefault(require("../../strToRegexpPattern"));
var uuid_1 = require("uuid");
var getBOCsBetweenSomething_1 = require("../utils/getBOCsBetweenSomething");
var getMatches_1 = require("../utils/getMatches");
/**
 * TODO: Chưa test được tất cả các trường họp xuống dòng linh tinh, những thứ không bình thường, ...
 * @link https://shopify.dev/api/liquid/tags/theme-tags#paginate
 @example cái này khá dài để diễn giải nên chưa có demo
 */
var paginate = function (liquid) {
  // @tuong -> cái này không quan trọng xử lí từ khối con trước hay khối tổng thể vì tag paginate tạm thời không thể viết nested
  var BOCs = (0, getBOCsBetweenSomething_1.getBOCsBetweenSomething)({
    liquid: liquid,
    startBOC: new RegExp(/{%\s*paginate/),
    endBOC: new RegExp(/{%\s*endpaginate\s*%}/),
  });
  var _liquid = liquid;
  var _loop_1 = function () {
    var BOC = BOCs.shift();
    // Xử lí xuống dòng để có thể regex
    var _BOC = BOC.replace(/%}(?!\n)/gm, "%}\n").replace(
      /{%\s*endpaginate\s*%}/gm,
      "\n{% endpaginate %}"
    );
    // Lấy ra dòng code {% paginate ... %}
    var line_of_code_start_paginate = (0, getMatches_1.getMatches)(
      _BOC,
      new RegExp(/{%\s*paginate.*%}/gm)
    )[0];
    // Lấy ra mệnh đề chứa tên biến được paginate và số item trên 1 paginate
    var _a = line_of_code_start_paginate
        .replace(/{%\s*paginate/, "")
        .replace(/%}/, "")
        .trim()
        .split("by"),
      arrayLimited = _a[0],
      quantityLimit = _a[1];
    var _arrayLimited = arrayLimited.trim();
    var _quantityLimit = quantityLimit.trim();
    var UNIQ_ID = (0, uuid_1.v4)().replaceAll("-", "_");
    var pathname = window.location.pathname; // TODO: @tuong -> Pathname đang điền tạm
    // Gán các biến để có thế sử dụng như liquid
    _BOC = _BOC
      .replace(
        line_of_code_start_paginate,
        "\n        {% set current_page_of_paginate_"
          .concat(UNIQ_ID, " = 1 %}\n        {% set items_of_paginate_")
          .concat(UNIQ_ID, " = (")
          .concat(
            _arrayLimited,
            " | length) %}\n        {% set pages_of_paginate_"
          )
          .concat(UNIQ_ID, " = (items_of_paginate_")
          .concat(UNIQ_ID, " / ")
          .concat(
            quantityLimit,
            ") | round(0, 'ceil') %}\n        {% set current_offset_of_paginate_"
          )
          .concat(UNIQ_ID, " = (current_page_of_paginate_")
          .concat(UNIQ_ID, " - 1) * items_of_paginate_")
          .concat(UNIQ_ID, " %}\n\n        {% if pages_of_paginate_")
          .concat(UNIQ_ID, " == 1 %}\n          {% set parts_of_paginate_")
          .concat(UNIQ_ID, " = [] %}\n        {% elseif pages_of_paginate_")
          .concat(UNIQ_ID, " == 2 %}\n          {% set parts_of_paginate_")
          .concat(
            UNIQ_ID,
            ' = [\n            {"title":1,"is_link":false},\n            {"title":2,"url":"'
          )
          .concat(
            pathname,
            '?page=2","is_link":true}\n          ]%}\n        {% elseif pages_of_paginate_'
          )
          .concat(UNIQ_ID, " == 3 %}\n          {% set parts_of_paginate_")
          .concat(
            UNIQ_ID,
            ' = [\n            {"title":1,"is_link":false},\n            {"title":2,"url":"'
          )
          .concat(
            pathname,
            '?page=2","is_link":true},\n            {"title":3,"url":"'
          )
          .concat(
            pathname,
            '?page=3","is_link":true}\n          ]%}\n        {% elseif pages_of_paginate_'
          )
          .concat(UNIQ_ID, " == 4 %}\n          {% set parts_of_paginate_")
          .concat(
            UNIQ_ID,
            ' = [\n            {"title":1,"is_link":false},\n            {"title":2,"url":"'
          )
          .concat(
            pathname,
            '?page=2","is_link":true},\n            {"title":3,"url":"'
          )
          .concat(
            pathname,
            '?page=3","is_link":true},\n            {"title":4,"url":"'
          )
          .concat(
            pathname,
            '?page=4","is_link":true}\n          ]%}\n        {% elseif pages_of_paginate_'
          )
          .concat(UNIQ_ID, " > 4 %}\n          {% set parts_of_paginate_")
          .concat(
            UNIQ_ID,
            ' = [\n            {"title":1,"is_link":false},\n            {"title":2,"url":"'
          )
          .concat(
            pathname,
            '?page=2","is_link":true},\n            {"title":3,"url":"'
          )
          .concat(
            pathname,
            '?page=3","is_link":true},\n            {"title":"&hellip;","is_link":false},\n            {"title": pages_of_paginate_'
          )
          .concat(UNIQ_ID, ',"url":"')
          .concat(pathname, "?page={{ pages_of_paginate_")
          .concat(
            UNIQ_ID,
            ' }}","is_link":true}\n          ]%}\n        {% else %}\n          {% set parts_of_paginate_'
          )
          .concat(
            UNIQ_ID,
            ' = [] %}\n        {% endif %}\n\n\n        {% set paginate = {\n        "current_offset": current_offset_of_paginate_'
          )
          .concat(
            UNIQ_ID,
            ',\n        "current_page": current_page_of_paginate_'
          )
          .concat(UNIQ_ID, ',\n        "items": items_of_paginate_')
          .concat(UNIQ_ID, ',\n        "page_size": ')
          .concat(
            _quantityLimit,
            ',\n        "next":{"title":"Next &raquo;","url":"'
          )
          .concat(
            pathname,
            '?page=2","is_link":true},\n        "pages": pages_of_paginate_'
          )
          .concat(UNIQ_ID, ',\n        "parts": parts_of_paginate_')
          .concat(UNIQ_ID, ',\n        "previous": null,\n      } %}')
      )
      .replace(/{%\s*endpaginate\s*%}/gm, "")
      // "(?!\\s*\\|)" vì thường paginate sử dụng để giới hạn vòng for và sẽ không có filter nào được sử dụng trong syntax vòng for nên đang làm như thế này
      .replace(
        new RegExp(
          "".concat(
            (0, strToRegexpPattern_1.default)(_arrayLimited),
            "(?!\\s*\\|)"
          ),
          "gm"
        ),
        "".concat(_arrayLimited, " | slice(0, ").concat(_quantityLimit, ")")
      );
    _liquid = _liquid.replace(BOC, _BOC);
    BOCs = BOCs.map(function (item) {
      return item.replace(BOC, _BOC);
    });
  };
  while (!!BOCs.length) {
    _loop_1();
  }
  return _liquid;
};
exports.paginate = paginate;
