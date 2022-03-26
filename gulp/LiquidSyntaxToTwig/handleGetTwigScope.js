"use strict";
var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleGetTwigScope = void 0;
var lodash_1 = require("lodash");
var ramda_1 = require("ramda");
var getSectionFileName_1 = require("../getSectionFileName");
var objectPathBracketNotation_1 = require("../objectPathBracketNotation");
/** Function xử lí lấy ra object variables để làm đầu vào cho function getTwigVariable(Tạo ra các biến cho twig từ 1 object) */
var handleGetTwigScope = function (_a) {
  var sectionId = _a.sectionId,
    sectionSettings = _a.sectionSettings,
    templateScope = _a.templateScope,
    variant = _a.variant;
  if (variant === "useResult") return templateScope;
  // eslint-disable-next-line @typescript-eslint/no-var-requires
  var liquidVariables = {};
  var variables = sectionSettings.reduce(function (variables, setting) {
    if (setting.children) {
      if (setting.type === "collectionPicker") {
        var _children = setting.children;
        return variables.concat("collections['".concat(_children.handle, "']"));
      }
      if (setting.type === "productPicker") {
        var _children = setting.children;
        return variables.concat(
          "all_products['".concat(_children.handle, "']")
        );
      }
      if (setting.type === "blogPicker") {
        var _children = setting.children;
        return variables.concat("blogs['".concat(_children.handle, "']"));
      }
    }
    if (setting.type === "object") {
      setting.children.forEach(function (_a) {
        var children = _a.children,
          type = _a.type;
        if (children) {
          if (type === "collectionPicker") {
            var _children = children;
            variables.push("collections['".concat(_children.handle, "']"));
          }
          if (type === "productPicker") {
            var _children = children;
            variables.push("all_products['".concat(_children.handle, "']"));
          }
          if (type === "blogPicker") {
            var _children = children;
            variables.push("blogs['".concat(_children.handle, "']"));
          }
        }
      });
    }
    // Không có trường hợp ở schema array vì array cần index mới có thể trích xuất chính xác dữ liệu để thế vào liquid -> điều này là khó có thể làm (có lẽ là không thể)
    return variables;
  }, []);
  var scope =
    variables === null || variables === void 0
      ? void 0
      : variables.reduce(
          function (res, variable) {
            (0, lodash_1.set)(
              res,
              (0, objectPathBracketNotation_1.objectPathBracketNotation)(
                variable
              ),
              (0, ramda_1.path)(
                (0, objectPathBracketNotation_1.objectPathBracketNotation)(
                  variable
                ),
                liquidVariables
              )
            );
            return res;
          },
          __assign(
            __assign(
              __assign({}, templateScope),
              (0, ramda_1.omit)(
                [
                  "themeCss",
                  "all_products",
                  "collections",
                  "blogs",
                  "articles",
                  "translations",
                  "weight_with_unit",
                  "translations",
                ],
                liquidVariables
              )
            ),
            {
              all_products: {},
              collections: {},
              blogs: {},
              articles: null,
              section: {
                blocks: [],
                settings: {},
                id: (0, getSectionFileName_1.getSectionFileName)(
                  sectionId
                ).replace(".liquid", ""),
              },
            }
          )
        );
  return scope;
};
exports.handleGetTwigScope = handleGetTwigScope;
