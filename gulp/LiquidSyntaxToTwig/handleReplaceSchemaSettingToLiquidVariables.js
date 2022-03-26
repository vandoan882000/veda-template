"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handleReplaceSchemaSettingToLiquidVariables = void 0;
var getVariableNameDependonSchemaType = function (setting) { return setting.name; };
/**
  ```ts
    {% assign collection = collections['{{ name_of_collection_picker_field_created_in_schema }}'] %}
    với {{ name_of_collection_picker_field_created_in_schema }} là 1 trường trong settings
    => thế slug vào {{ name_of_collection_picker_field_created_in_schema }}
  ```
 */
var handleReplaceSchemaSettingToLiquidVariables = function (_a) {
    var liquid = _a.liquid, settings = _a.settings;
    // Xử lí gán biến cho twig
    var _liquid = liquid;
    settings.forEach(function (setting) {
        var _a;
        // Trường hợp ở schema setting
        if (['collectionPicker', 'productPicker', 'blogPicker'].includes(setting.type)) {
            var _setting = setting;
            var variableName = getVariableNameDependonSchemaType(setting);
            var variableValue = (_a = _setting.children) === null || _a === void 0 ? void 0 : _a.handle;
            if (variableValue) {
                _liquid = _liquid
                    .replace(new RegExp("{{\\s*".concat(variableName, "\\s*}}"), 'gm'), variableValue)
                    .replace(new RegExp("".concat(variableName), 'gm'), variableValue);
            }
        }
        // Trường hợp ở schema block
        if (setting.type === 'object') {
            var _children = setting.children;
            _children.forEach(function (child) {
                var _a;
                if (['collectionPicker', 'productPicker', 'blogPicker'].includes(child.type)) {
                    var _child = child;
                    var variableName = [setting.name, getVariableNameDependonSchemaType(child)].join('.');
                    var variableValue = (_a = _child.children) === null || _a === void 0 ? void 0 : _a.handle;
                    if (variableValue) {
                        _liquid = _liquid
                            .replace(new RegExp("{{\\s*".concat(variableName, "\\s*}}"), 'gm'), variableValue)
                            .replace(new RegExp("\\.".concat(variableName), 'gm'), variableValue);
                    }
                }
            });
        }
        // Không có trường hợp ở schema array vì array cần index mới có thể trích xuất chính xác dữ liệu để thế vào liquid -> điều này là khó có thể làm (có lẽ là không thể)
    });
    return _liquid;
};
exports.handleReplaceSchemaSettingToLiquidVariables = handleReplaceSchemaSettingToLiquidVariables;
