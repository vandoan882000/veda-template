"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleReplaceGeneralOpenCloseBlock = void 0;
/**
 * Function thực hiện quy hết các dấu đóng mở 1 block của liquid về 1
 */
var handleReplaceGeneralOpenCloseBlock = function (liquid) {
    return liquid
        .replace(/{%-/g, '{%')
        .replace(/-%}/g, '%}')
        .replace(/{{-/g, '{{')
        .replace(/-}}/g, '}}');
};
exports.handleReplaceGeneralOpenCloseBlock = handleReplaceGeneralOpenCloseBlock;
