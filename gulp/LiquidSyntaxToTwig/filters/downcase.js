"use strict";
/**
 ```ts
 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | downcase | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{"<p>Dainty gold necklace with two pendants.</p>" | downcase | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v"}}

 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | downcase | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{ some_html | downcase }}
 {{ some_html | downcase | append: 'abc' | split: ',' | join: " " }}
 ```
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.downcase = void 0;
/**
 * TODO: Có hay không việc nên custom lại cái này
 * @link https://shopify.github.io/liquid/filters/downcase/
 */
var downcase = function (liquid) {
    return liquid.replace(/\|\s*downcase/gm, '| lower');
};
exports.downcase = downcase;
