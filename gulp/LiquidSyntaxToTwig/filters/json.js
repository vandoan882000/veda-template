"use strict";
/**
 ```ts
  <script>
    const collection = {{ collections['{{ collection }}'] | json }}
  </script>
  {% assign collection = collections['{{ collection }}'] | json | append: products['{{ product1 }}'] | json %}
  ```
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.json = void 0;
/**
 * TODO: Có hay không việc nên custom lại cái này ???
 * @link https://shopify.dev/api/liquid/filters/additional-filters#json
 */
var json = function (liquid) {
    return liquid.replace(/\|\s*json\s*/gm, '| json_encode()');
};
exports.json = json;
