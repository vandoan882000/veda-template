"use strict";
/**
 Generates a form on the customers/reset_password.liquid template for a customer to reset their password.
 ```ts
 {% form 'reset_customer_password' %}
   ...<p>Something</p>
 {% endform %}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.reset_customer_password = void 0;
/**
 * @link https://shopify.dev/api/liquid/tags/theme-tags#form
 */
var reset_customer_password = function (liquid) {
    return liquid.replace(/{%\s*form.*reset_customer_password.*%}/gm, function (BOC) {
        // validateLiquidSyntaxNestable({ BOC, name: 'form', errorMessage: i18n.t('twig_error.theme_tags.forms.unnestable') });
        return BOC.replace(/{%\s*form.*reset_customer_password.*%}/, function (value) {
            // Xoá đi "{% form" và "%}" để lấy ra mệnh đề chứa các tham số đầu vào cho form liquid
            var content_properties_of_form = value.replace(/{%\s*form/, '').replace(/%}/, '');
            var properties = content_properties_of_form
                .split(',')
                .slice(1)
                .map(function (item) { return item.trim(); });
            var form = document.createElement('form');
            form.setAttribute('method', 'post');
            form.setAttribute('action', '/account/account/reset');
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
            return "".concat(form.outerHTML.replace('</form>', ''), "\n      <input type=\"hidden\" value=\"reset_customer_password\" name=\"form_type\" />\n      <input name=\"utf8\" type=\"hidden\" value=\"\u2713\" />");
        }).replace(/{%\s*endform\s*%}/, function () {
            return "<input type=\"hidden\" name=\"token\" value=\"408b680ac218a77d0802457f054260b7-1452875227\">\n      <input type=\"hidden\" name=\"id\" value=\"1080844568\">\n    </form>";
        });
    });
};
exports.reset_customer_password = reset_customer_password;
