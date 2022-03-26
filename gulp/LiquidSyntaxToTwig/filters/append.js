"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.append = void 0;
/**
 ```ts
 {% assign collectionTitle = collection.title | append: ".helloworld" | append: collection.title %}
 <h3>Collection: {{ collectionTitle }}</h3>
 <h3>Collection: {{ collection.title | append: ".helloworld" | append: collection.title }}</h3>
 ```
 */
/**
 * TODO: Có hay không việc nên custom lại cái này
 * @link https://shopify.github.io/liquid/filters/append/

 @example
 Input:
 {% assign collectionTitle = collection.title | append: ".helloworld" | append: collection.title %}
 Output:
 {% assign collectionTitle = collection.title ~ ".helloworld" ~ collection.title %}
 */
var append = function (liquid) {
    return liquid.replace(/\|\s*append\s*:/gm, '~ ');
};
exports.append = append;
