"use strict";
var __createBinding =
  (this && this.__createBinding) ||
  (Object.create
    ? function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        Object.defineProperty(o, k2, {
          enumerable: true,
          get: function () {
            return m[k];
          },
        });
      }
    : function (o, m, k, k2) {
        if (k2 === undefined) k2 = k;
        o[k2] = m[k];
      });
var __setModuleDefault =
  (this && this.__setModuleDefault) ||
  (Object.create
    ? function (o, v) {
        Object.defineProperty(o, "default", { enumerable: true, value: v });
      }
    : function (o, v) {
        o["default"] = v;
      });
var __importStar =
  (this && this.__importStar) ||
  function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null)
      for (var k in mod)
        if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
          __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
  };
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
var R = __importStar(require("ramda"));
var storage_1 = __importDefault(require("../storage"));
var strToCapitalize_1 = __importDefault(require("../strToCapitalize"));
var createI18n = function (source) {
  var _locale = storage_1.default.getItem("__LOCALE__") || "vi";
  storage_1.default.setItem("__LOCALE__", _locale);
  var _setLocale = function (locale) {
    var _a, _b;
    storage_1.default.setItem("__LOCALE__", locale);
    _locale =
      (_b =
        (_a = storage_1.default.getItem("__LOCALE__")) !== null && _a !== void 0
          ? _a
          : locale) !== null && _b !== void 0
        ? _b
        : navigator.language;
  };
  var _getLocale = function () {
    return _locale.replace(/(-|_).*/g, "");
  };
  var translation = function (key, options) {
    var _lang = source[_locale.replace(/(-|_).*/g, "")] || source["en"];
    var _options = options;
    if (!_lang) {
      return "";
    }
    var value = key.includes(".") ? R.path(key.split("."), _lang) : _lang[key];
    if (!_options) {
      return value.replace(/%%(\s*\w*\s*)%%/g, "").trim();
    }
    var text = Object.entries(R.omit(["textTransform"], _options)).reduce(
      function (acc, _a) {
        var prop = _a[0],
          value = _a[1];
        var regex = new RegExp("%%\\s*".concat(prop, "\\s*%%"), "g");
        if (!acc) {
          return "";
        }
        return acc.replace(regex, value).trim();
      },
      value
    );
    switch (_options.textTransform) {
      case "uppercase":
        return text.toUpperCase();
      case "lowercase":
        return text.toLowerCase();
      case "capitalize":
        return (0, strToCapitalize_1.default)(text);
      case "none":
      default:
        return text;
    }
  };
  return {
    setLocale: _setLocale,
    getLocale: _getLocale,
    t: translation,
  };
};
exports.default = createI18n;
