"use strict";
/**
 ```ts
 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | strip_html | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{"<p>Dainty gold necklace with two pendants.</p>" | strip_html | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v"}}

 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | strip_html | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{ some_html | strip_html }}
 {{ some_html | strip_html | append: 'abc' | split: ',' | join: " " }}
 ```
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.strip_html = void 0;
/**
 * TODO: Có hay không việc nên custom lại cái này ???
 * @link https://shopify.github.io/liquid/filters/strip_html/
 */
var strip_html = function (liquid) {
    return liquid.replace(/\|\s*strip_html/gm, '| striptags');
};
exports.strip_html = strip_html;
