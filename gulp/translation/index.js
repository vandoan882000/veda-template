"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.setLocale = exports.getLocale = exports.i18n = void 0;
var createI18n_1 = __importDefault(require("../createI18n"));
var translation_1 = require("./translation");
var _i18n = (0, createI18n_1.default)(translation_1.translation);
exports.i18n = {
  t: _i18n.t,
};
exports.getLocale = _i18n.getLocale;
var setLocale = function (locale) {
  _i18n.setLocale(locale || "vi");
};
exports.setLocale = setLocale;
