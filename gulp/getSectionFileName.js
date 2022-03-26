"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSectionFileName = void 0;
var constants_1 = require("./constants/constants");
var getSectionFileName = function (sectionId) {
  return ""
    .concat(constants_1.Consts.AppName, "-")
    .concat(sectionId, ".liquid");
};
exports.getSectionFileName = getSectionFileName;
