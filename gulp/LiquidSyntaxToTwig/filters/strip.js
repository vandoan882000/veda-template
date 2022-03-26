"use strict";
/**
 ```ts
 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | strip | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{"<p>Dainty gold necklace with two pendants.</p>" | strip | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v"}}

 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | strip | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{ some_html | strip }}
 {{ some_html | strip | append: 'abc' | split: ',' | join: " " }}
 ```
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.strip = void 0;
/**
 * TODO: Có hay không việc nên custom lại cái này ???
 * @link https://shopify.github.io/liquid/filters/strip/
 */
var strip = function (liquid) {
    // \w+ để fix lỗi cho strip_html
    return liquid.replace(/\|\s*strip(?!\w+)/gm, '| trim');
};
exports.strip = strip;
