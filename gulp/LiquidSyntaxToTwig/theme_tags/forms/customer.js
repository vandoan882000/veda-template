"use strict";
/**
 Generates a form for creating a new customer without registering a new account
 ```ts
 {% form 'customer' %}
   ...<p>Something</p>
 {% endform %}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.customer = void 0;
/**
 * @link https://shopify.dev/api/liquid/tags/theme-tags#form
 */
var customer = function (liquid) {
    return liquid.replace(/{%\s*form.*customer.*%}/gm, function (BOC) {
        // validateLiquidSyntaxNestable({ BOC, name: 'form', errorMessage: i18n.t('twig_error.theme_tags.forms.unnestable') });
        return BOC.replace(/{%\s*form.*customer.*%}/, function (value) {
            // Xoá đi "{% form" và "%}" để lấy ra mệnh đề chứa các tham số đầu vào cho form liquid
            var content_properties_of_form = value.replace(/{%\s*form/, '').replace(/%}/, '');
            var properties = content_properties_of_form
                .split(',')
                .slice(1)
                .map(function (item) { return item.trim(); });
            var form = document.createElement('form');
            form.setAttribute('method', 'post');
            form.setAttribute('action', '/contact#contact_form');
            form.setAttribute('accept-charset', 'UTF-8');
            form.setAttribute('id', 'contact_form');
            form.setAttribute('class', 'contact-form');
            properties.forEach(function (property) {
                if (property.includes(':')) {
                    var _a = property.split(':').map(function (item) { return item.trim(); }), key = _a[0], value_1 = _a[1];
                    var valueIsVariable = !/^(\'|\")/.test(value_1);
                    if (valueIsVariable) {
                        form.setAttribute(key, "{{ ".concat(value_1, " }}"));
                    }
                    else {
                        form.setAttribute(key, value_1.replace(/^(\'|\")/, '').replace(/(\'|\")$/, ''));
                    }
                }
            });
            return "".concat(form.outerHTML.replace('</form>', ''), "\n      <input type=\"hidden\" value=\"customer\" name=\"form_type\">\n      <input type=\"hidden\" name=\"utf8\" value=\"\u2713\">");
        });
    });
};
exports.customer = customer;
