"use strict";
/**
  ```ts Trường hợp assign không gán vào biến
  {% assign abc = collection.title | truncate: 10 %}
  {% assign abc = collection.title | truncate: 10, "v.v" %}
  {% assign abc = collection.title | truncate: 10, "v.v" | append: 'abcd' | split: ' ' | join: ',' %}


  {{  collection.title | truncate: 10 }}
  {{  collection.title | truncate: 10, "_view more" }}
  {{  collection.title | truncate: 10, "_view more" | append: 'abcd' | split: ' ' | join: ',' }}
  ```

  ```ts Trường hợp gán vào biến
  {% assign splitter = '.etc' %}
  {% assign abc = collection.title | truncate: 10 %}
  {% assign abc = collection.title | truncate: 10, splitter %}
  {% assign abc = collection.title | truncate: 10, splitter | append: 'abcd' | split: ' ' | join: ',' %}

  {{  collection.title | truncate: 10 }}
  {{  collection.title | truncate: 10, splitter }}
  {{  collection.title | truncate: 10 | append: 'abc' }}
  {{  collection.title | truncate: 10, splitter | append: 'abcd' | split: ' ' | join: ',' }}
  ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.truncate = void 0;
/**
 * TODO: Có hay không nên việc custom lại cái này ?????
 * @link https://shopify.github.io/liquid/filters/truncate/
 */
var truncate = function (liquid) {
    // Xử lí trường hợp truncate là filters cuối cùng trước -> trường hợp này đc xử lí xong sẽ chỉ còn trường hợp truncate đứng vị trí bất kì không phải cuối cùng
    return liquid
        .replaceAll('|', '\n|')
        .replaceAll('}}', '}}\n')
        .replaceAll('%}', '%}\n')
        .replace(/\s\|\s*truncate:.*(?=\s*(\}|%)\})/g, function (x) {
        var min = 0;
        var max = x.replace(/\s\|\s*truncate:\s*|,.*/g, '');
        if (x.includes(',')) {
            var variable_1 = x.replace(/\s\|\s*truncate:.*,\s*/g, '');
            return "| slice(".concat(min, ",").concat(max, " - ").concat(variable_1, "|length) ~ ").concat(variable_1);
        }
        var variable = '...';
        return "| slice(".concat(min, ",").concat(max, " - \"").concat(variable, "\"|length) ~ \"").concat(variable, "\"");
    })
        .replace(/\s\|\s*truncate:.*/g, function (x) {
        var min = 0;
        var max = x.replace(/\s\|\s*truncate:\s*|,.*/g, '');
        if (x.includes(',')) {
            var variable_2 = x.replace(/\s\|\s*truncate:.*,\s*/g, '');
            return "| slice(".concat(min, ",").concat(max, " - ").concat(variable_2, "|length) ~ ").concat(variable_2);
        }
        var variable = '...';
        return "| slice(".concat(min, ",").concat(max, " - \"").concat(variable, "\"|length) ~ \"").concat(variable, "\"");
    })
        .replaceAll('\n|', '|')
        .replaceAll('}}\n', '}}')
        .replaceAll('%}\n', '%}');
};
exports.truncate = truncate;
