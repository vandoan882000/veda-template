"use strict";
/**
 Generates a form on the login.liquid template that directs customers back to their checkout session as a guest instead of logging in to an account.
 ```ts
 {% form 'guest_login' %}
   ...<p>Something</p>
 {% endform %}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.guest_login = void 0;
/**
 * @link https://shopify.dev/api/liquid/tags/theme-tags#form
 */
var guest_login = function (liquid) {
    return liquid.replace(/{%\s*form.*guest_login.*%}/gm, function (BOC) {
        // validateLiquidSyntaxNestable({ BOC, name: 'form', errorMessage: i18n.t('twig_error.theme_tags.forms.unnestable') });
        return BOC.replace(/{%\s*form.*guest_login.*%}/, function (value) {
            // Xoá đi "{% form" và "%}" để lấy ra mệnh đề chứa các tham số đầu vào cho form liquid
            var content_properties_of_form = value.replace(/{%\s*form/, '').replace(/%}/, '');
            var properties = content_properties_of_form
                .split(',')
                .slice(1)
                .map(function (item) { return item.trim(); });
            var form = document.createElement('form');
            form.setAttribute('method', 'post');
            form.setAttribute('action', '/account/login');
            form.setAttribute('accept-charset', 'UTF-8');
            form.setAttribute('id', 'customer_login_guest');
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
            return "".concat(form.outerHTML.replace('</form>', ''), "\n      <input type=\"hidden\" value=\"guest_login\" name=\"form_type\">\n      <input type=\"hidden\" name=\"utf8\" value=\"\u2713\">");
        }).replace(/{%\s*endform\s*%}/, function () {
            return "<input type=\"hidden\" name=\"guest\" value=\"true\">\n      <input type=\"hidden\" name=\"checkout_url\" value=\"https://checkout.shopify.com/store-id/checkouts/session-id?step=contact_information\">\n      </form>";
        });
    });
};
exports.guest_login = guest_login;
