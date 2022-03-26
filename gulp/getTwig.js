"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTwig = exports.getTwigVariable = void 0;
/**
 * @description Tạo ra các biến cho twig từ 1 object
 */
var getTwigVariable = function (args) {
    return Object.entries(args).reduce(function (str, _a) {
        var key = _a[0], val = _a[1];
        return "".concat(str, "\n{% set ").concat(key, " = ").concat(JSON.stringify(val), " %}");
    }, '');
};
exports.getTwigVariable = getTwigVariable;
/**
 * @description Tạo ra các biến từ `templateScope` và sửa từ khoá `assign` thành `set`
 */
var getTwig = function (id, template, templateScope) {
    return "".concat((0, exports.getTwigVariable)(__assign({ uniqueId: id }, templateScope)), "\n").concat(template.replace(/\{%\s*assign/g, '{% set'));
};
exports.getTwig = getTwig;
