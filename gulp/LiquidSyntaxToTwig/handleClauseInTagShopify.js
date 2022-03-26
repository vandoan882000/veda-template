"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleClauseInTagShopify = void 0;
var translation_1 = require("../translation");
var handleSchemaSetting = function (_a) {
  var parentName = _a.parentName,
    shopify_clause = _a.shopify_clause,
    settings = _a.settings;
  var _result = shopify_clause;
  settings.forEach(function (item) {
    var _name = [parentName, item.name]
      .filter(function (item) {
        return !!item;
      })
      .join(".");
    if (item.type === "color") _result = _result.replace(_name, item.children);
    if (item.type === "date")
      _result = _result.replace(_name, item.children.toString());
    if (item.type === "flexOrder") {
      Object.entries(item.children).forEach(function (_a) {
        var itemName = _a[0],
          order = _a[1];
        _result = _result.replace(
          [_name, itemName].join("."),
          order.toString()
        );
      });
    }
    if (item.type === "font") _result = _result.replace(_name, item.children);
    if (item.type === "icon") _result = _result.replace(_name, item.children);
    if (item.type === "image") _result = _result.replace(_name, item.children);
    if (item.type === "linkPicker")
      _result = _result.replace(_name, item.children);
    if (item.type === "navigation")
      throw new Error(
        translation_1.i18n.t("twig_error.clause_in_shopify.navigation")
      );
    if (item.type === "radioGroup")
      _result = _result.replace(_name, item.children);
    if (item.type === "responsive") {
      Object.entries(item.children).forEach(function (_a) {
        var key = _a[0],
          value = _a[1];
        _result = _result.replace([_name, key].join("."), value.toString());
      });
    }
    if (item.type === "select") _result = _result.replace(_name, item.children);
    if (item.type === "slider")
      _result = _result.replace(_name, item.children.toString());
    if (item.type === "space")
      _result = _result.replace(_name, item.children.toString());
    if (item.type === "styleBox")
      _result = _result.replace(_name, item.children);
    if (item.type === "switch")
      _result = _result.replace(_name, item.children.toString());
    if (item.type === "text") _result = _result.replace(_name, item.children);
    if (item.type === "textarea")
      _result = _result.replace(_name, item.children);
    if (item.type === "video") _result = _result.replace(_name, item.children);
  });
  return _result;
};
var handleSchemaBlock = function (_a) {
  var shopify_clause = _a.shopify_clause,
    blocks = _a.blocks;
  var _result = shopify_clause;
  blocks.forEach(function (block) {
    if (block.type === "array")
      throw new Error(
        translation_1.i18n.t("twig_error.clause_in_shopify.array")
      );
    if (block.type === "object")
      _result = handleSchemaSetting({
        shopify_clause: _result,
        parentName: block.name,
        settings: block.children,
      });
  });
  return _result;
};
/** Thế các biến của builder cho các phần tử bên trong tag "shopify" */
var handleClauseInTagShopify = function (_a) {
  var shopify_clause = _a.shopify_clause,
    settings = _a.settings;
  var schema_blocks = settings.filter(function (item) {
    return item.type === "array" || item.type === "object";
  });
  var schema_settings = settings.filter(function (item) {
    return item.type !== "array" && item.type !== "object";
  });
  return handleSchemaSetting({
    shopify_clause: handleSchemaBlock({
      blocks: schema_blocks,
      shopify_clause: shopify_clause,
    }),
    settings: schema_settings,
  });
};
exports.handleClauseInTagShopify = handleClauseInTagShopify;
