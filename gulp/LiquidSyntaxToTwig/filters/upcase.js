"use strict";
/**
 ```ts
 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | upcase | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{"<p>Dainty gold necklace with two pendants.</p>" | upcase | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v"}}

 {% assign some_html = "<p>Dainty gold necklace with two pendants.</p>" | upcase | append: "Lorem ipsum" | split: " " | join: ',' | truncate: 10, "v.v" %}
 {{ some_html | upcase }}
 {{ some_html | upcase | append: 'abc' | split: ',' | join: " " }}
 ```
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.upcase = void 0;
/**
 * TODO: Có hay không nên việc custom lại cái này ???
 * @link https://shopify.github.io/liquid/filters/upcase/
 */
var upcase = function (liquid) {
    return liquid.replace(/\|\s*upcase/gm, '| upper');
};
exports.upcase = upcase;
