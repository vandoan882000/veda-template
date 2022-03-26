"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.liquidFilterParamsToTwigFilterParams = void 0;
var getMatches_1 = require("./getMatches");
/**
 * Xử lí biến param cho filter của liquid thành params cho filter của twig
  @example
  Input: {{  filter_with_params: params_value }}
  Output: {{ filter_with_params(params_value) }}
*/
var liquidFilterParamsToTwigFilterParams = function (_a) {
    var liquid = _a.liquid, liquidFilterName = _a.liquidFilterName, twigFilterName = _a.twigFilterName;
    var regex1 = new RegExp("\\|\\s*".concat(liquidFilterName, ":\\s*(.*)(?=}}|%}|\\|)"), 'gm');
    var regex2 = new RegExp("\\|\\s*".concat(liquidFilterName, ":\\s*(.*)"), 'gm');
    // Xử lí trường hợp split là filters cuối cùng trước -> trường hợp này đc xử lí xong sẽ chỉ còn trường hợp split đứng vị trí bất kì không phải cuối cùng
    return liquid
        .replaceAll('|', '\n|')
        .replaceAll('}}', '}}\n')
        .replaceAll('%}', '%}\n')
        .replace(regex1, function (value) {
        var _a = (0, getMatches_1.getMatches)(value, new RegExp(regex2)), parametersClause = _a[1];
        return "| ".concat(twigFilterName, "(").concat(parametersClause.trim(), ")");
    })
        .replace(regex2, function (value) {
        var _a = (0, getMatches_1.getMatches)(value, new RegExp(regex2)), parametersClause = _a[1];
        return "| ".concat(twigFilterName, "(").concat(parametersClause.trim(), ")");
    })
        .replaceAll('\n|', '|')
        .replaceAll('}}\n', '}}')
        .replaceAll('%}\n', '%}');
};
exports.liquidFilterParamsToTwigFilterParams = liquidFilterParamsToTwigFilterParams;
