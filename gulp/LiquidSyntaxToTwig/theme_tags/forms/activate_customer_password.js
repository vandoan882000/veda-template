"use strict";
/**
 Generates a form for activating a customer account on the activate_account.liquid template.
 ```ts
 {% form 'activate_customer_password' %}
   ...<p>Something</p>
 {% endform %}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate_customer_password = void 0;
/**
 * @link https://shopify.dev/api/liquid/tags/theme-tags#form
 */
var activate_customer_password = function (liquid) {
    return liquid.replace(/{%\s*form.*activate_customer_password.*%}/gm, function (BOC) {
        // validateLiquidSyntaxNestable({ BOC, name: 'form', errorMessage: i18n.t('twig_error.theme_tags.forms.unnestable') });
        return BOC.replace(/{%\s*form.*activate_customer_password.*%}/, function (value) {
            // Xoá đi "{% form" và "%}" để lấy ra mệnh đề chứa các tham số đầu vào cho form liquid
            var content_properties_of_form = value.replace(/{%\s*form/, '').replace(/%}/, '');
            var properties = content_properties_of_form
                .split(',')
                .slice(1)
                .map(function (item) { return item.trim(); });
            var form = document.createElement('form');
            form.setAttribute('method', 'post');
            form.setAttribute('action', '/account/activate');
            form.setAttribute('accept-charset', 'UTF-8');
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
            return "".concat(form.outerHTML.replace('</form>', ''), "\n      <input name=\"form_type\" type=\"hidden\" value=\"activate_customer_password\" />\n      <input name=\"utf8\" type=\"hidden\" value=\"\u2713\" />");
        });
    });
};
exports.activate_customer_password = activate_customer_password;
