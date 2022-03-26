"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleReplaceToGeneralIfElseElseIf = void 0;
/**
 * Function thực hiện quy hết các syntax "if elseif else" của liquid về 1
 */
var handleReplaceToGeneralIfElseElseIf = function (liquid) {
    return liquid.replace(/{%\s*else\s*if/g, '{% elseif').replace(/{%\s*elsif/gm, '{% elseif');
};
exports.handleReplaceToGeneralIfElseElseIf = handleReplaceToGeneralIfElseElseIf;
