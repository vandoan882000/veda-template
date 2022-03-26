"use strict";
/**
 Generates a form for adding a product variant to the cart. Requires a product object as a parameter.
 ```ts
  {%- form 'product', product, id: product_form_id, class: 'form', novalidate: 'novalidate', data-type: 'add-to-cart-form' -%}
    <input type="hidden" name="id" value="{{ product.selected_or_first_available_variant.id }}">
    <div class="product-form__buttons">
      <button
        type="submit"
        name="add"
        class="product-form__submit button button--full-width {% if block.settings.show_dynamic_checkout and product.selling_plan_groups == empty %}button--secondary{% else %}button--primary{% endif %}"
      {% if product.selected_or_first_available_variant.available == false %}disabled{% endif %}
      >
          {%- if product.selected_or_first_available_variant.available -%}
            {{ 'products.product.add_to_cart' | t }}
          {%- else -%}
            {{ 'products.product.sold_out' | t }}
          {%- endif -%}
      </button>
      {{ form | payment_button }}
    </div>
  {%- endform -%}
 ```
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.product = void 0;
/**
 * @link https://shopify.dev/api/liquid/tags/theme-tags#form
 */
var product = function (liquid) {
    return liquid.replace(/{%\s*form.*product.*%}/gm, function (BOC) {
        // validateLiquidSyntaxNestable({ BOC, name: 'form', errorMessage: i18n.t('twig_error.theme_tags.forms.unnestable') });
        return BOC.replace(/{%\s*form.*product.*%}/, function (value) {
            // Xoá đi "{% form" và "%}" để lấy ra mệnh đề chứa các tham số đầu vào cho form liquid
            var content_properties_of_form = value.replace(/{%\s*form/, '').replace(/%}/, '');
            var properties = content_properties_of_form
                .split(',')
                .slice(1)
                .map(function (item) { return item.trim(); });
            var form = document.createElement('form');
            form.setAttribute('method', 'post');
            form.setAttribute('action', '/cart/add');
            form.setAttribute('enctype', 'multipart/form-data');
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
            return "".concat(form.outerHTML.replace('</form>', ''), "\n      <input type=\"hidden\" name=\"form_type\" value=\"product\">\n      <input type=\"hidden\" name=\"utf8\" value=\"\u2713\">\n      <input type=\"hidden\" name=\"id\" value=\"variant_id\">");
        });
    });
};
exports.product = product;
