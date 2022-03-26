"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleReplaceToGeneralAssign = void 0;
/**
 * Function thực hiện chuyển "assign" của liquid thành "set" của twig
 */
var handleReplaceToGeneralAssign = function (liquid) {
    return liquid.replace(/({%|{%-})\s*assign/g, '{% set');
};
exports.handleReplaceToGeneralAssign = handleReplaceToGeneralAssign;
