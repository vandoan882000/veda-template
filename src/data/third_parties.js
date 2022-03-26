export const third_parties = {
  'Product Reviews': {
    Reviews: `<div id="shopify-product-reviews" data-id="{{product.id}}">{{ product.metafields.spr.reviews }}</div>`,
    'Star Badge': `<span class="shopify-product-reviews-badge" data-id="{{ product.id }}"></span>`,
  },
  'RIVYO REVIEWS': {
    Reviews: `<div id="wc_review_section" class="wc_review_main_content" data-url="{{ shop.url }}" data-handle="{{ product.handle }}" data-limit="0"></div>`,
    'Star Badge': `<div class="wc_product_review_badge" data-handle="{{ product.handle }}"></div>`,
  },
  'WIDE BUNDLE': `{% if product %}<div id="new-form"> </div>{% endif %}`,
  'Ali Reviews (Star Ratings)': {
    'Product Page': `<div product-id="{{ product.id }}" class="alr-display-review-badge"></div>`,
    'Collection Page': `<div product-id="{{ product.id }}" class="arv-collection arv-collection--{{ product.id }}"></div>`,
  },
  'Stamped.io Reviews': {
    Reviews: `
    <div
      id="stamped-main-widget"
      data-widget-style="standard"
      data-product-id="{{ product.id }}"
      data-name="{{ product.title | escape }}"
      data-url="{{ shop.url }}{{ product.url }}"
      data-image-url="{{ product.featured_image | product_img_url: "large" |replace: '?', '%3F' | replace: '&','%26'}}"
      data-description="{{ product.description | escape }}"
      data-product-sku="{{product.handle}}"
      data-product-type="{{product.type}}"
    >
      {{ product.metafields.stamped.reviews }}
    </div>`,
    'Star Badge': `
    <span
      class="stamped-product-reviews-badge"
      data-product-sku="{{ product.handle }}"
      data-id="{{ product.id }}"
      data-product-type="{{product.type}}"
      data-product-title="{{product.title}}"
      style="display:block;"
    >
      {{ product.metafields.stamped.badge }}
    </span>`,
    Carousel: `<div id="stamped-reviews-widget" data-widget-type="carousel"></div>`,
  },
  'Loox (Star Badge & Reviews)': {
    'Star Badge': `
      <a href="#looxReviews">
        <div class="loox-rating" data-id="{{ product.id }}" data-rating="{{ product.metafields.loox.avg_rating }}" data-raters="{{ product.metafields.loox.num_reviews }}"></div>
      </a>
    `,
    'Product page Reviews': `<div id="looxReviews" data-product-id="{{product.id}}">{{ product.metafields.loox.reviews }}</div>`,
    'Homepage Reviews': `<div id="looxReviews" data-loox-aggregate="" data-limit="20"></div>`,
  },
  'Vitals Integration': {
    'Product Reviews': `<div id="bundle-product_reviews"></div>`,
    'Product Bundles': `<div id="bundle-product-bundles"></div>`,
    'Volume Discounts': `<div id="bundle-volume-discounts"></div>`,
    'Trust Seals and Badges': `<div id="bundle-trust_badges"></div>`,
  },
  'Tabs By Station': `<div data-station-tabs-app="">{{product.content}}</div>`,
  'Opinew Reviews': {
    Reviews: `
      <div style="clear:both;"></div>
      <div id="opinew-reviews-product-page-code" class="">
        <span
          id="opinew-plugin"
          data-server-address="https://www.opinew.com"
          data-opw-prodreviews="{{ product.metafields.opinew_metafields['product_plugin'] }}"
          data-opinew-shop-id="{{ shop.id }}" data-shop-url="{{shop.domain}}"
          data-platform-product-id="{{product.id}}"
        >
         <span id="opinew_product_plugin_app"></span>
        </span>
      </div>
    `,
    'Star Badge': `<div class="opinew-stars-plugin-product-list">{% render 'opinew_review_stars_lists' %}</div>`,
  },
  'Judge.me Reviews': {
    Reviews: `{% render 'judgeme_widgets', widget_type: 'judgeme_review_widget', concierge_install: false, product: product %}`,
    'Star Badge': `{% render 'judgeme_widgets', widget_type: 'judgeme_preview_badge', jm_style: '', concierge_install: false, product: product %}`,
    Carousel: `{% render 'judgeme_widgets', widget_type: 'judgeme_featured_carousel', concierge_install: false %}`,
  },
  'Areviews ‑ Reviews Importer': {
    Reviews: `<div id="Areviewsapp" class="page-full">{% render 'aliexpress_reviews' %}</div>`,
    Slider: `<div id="az_reviews_slider"></div>`,
    'Star Badge': `<div class="areviews_header_stars"></div>`,
  },
  'Ali Reviews (Review Widget)': `This add-on currently works the Theme Builder only. We’re working hard to bring it on the Page Builder ASAP!`,
  'Yotpo Reviews': {
    Reviews: `
      <div
        class="yotpo yotpo-main-widget"
        data-product-id="{{ product.id }}"
        data-name="{{ product.title | escape }}"
        data-url="{{ shop.url }}{{ product.url }}"
        data-image-url="{{ product.featured_image | product_img_url: 'large' |replace: '?', '%3F' | replace: '&','%26'}}"
        data-description="{{ product.description | escape }}"
      ></div>
    `,
    'Star Badge': `
      <div class="yotpo bottomLine" data-product-id="{{ product.id }}">
        {%- assign yotpo_offload_content = shop.metafields.yotpo.yotpo_offload_content %}
        {%- assign time_now = 'now' | date: '%s' %}
        {%- assign yotpo_live_time = shop.metafields.yotpo.yotpo_live | date: '%s' %}
        {%- assign diff_seconds_from_live = time_now | minus: yotpo_live_time %}
        {%- assign yotpo_bottomline_last_updated = product.metafields.yotpo.bottomline_update_time | date: '%s' %}
        {%- assign diff_seconds_from_last_bottomline_update = time_now | minus: yotpo_bottomline_last_updated %}
        {%- if yotpo_live_time and diff_seconds_from_live < 86400 or yotpo_bottomline_last_updated and diff_seconds_from_last_bottomline_update < 86400 -%}
          {%- assign yotpo_bottomline_obsolete = false %}
        {%- else %}
          {%- assign yotpo_bottomline_obsolete = true %}
        {%- endif %}
        {%- if yotpo_offload_content == 'yes' and yotpo_bottomline_obsolete != true -%}
          {{ product.metafields.yotpo.bottomline }}
        {%- endif %}
      </div>
    `,
  },
  'Loox (Carousel Widget)': `
  {% if template.name == 'product' %}
    <div id="looxCarousel" data-show-more="true" data-product-ids="{{ product.id }}"></div>
  {% else %}
    <div id="looxCarousel" data-show-more="true"></div>
  {% endif %}
  `,
  'Ryviu Reviews': {
    'Star Badge': `
      <div class="review-widget">
        <ryviu-widget-total
          reviews_data="{{product.metafields.ryviu.product_reviews_info  | escape  }}"
          product_id="{{product.id}}"
          handle="{{product.handle}}"
        ></ryviu-widget-total>
      </div>
    `,
    Reviews: `
    <div class="lt-block-reviews">
      <ryviu-widget
        handle="{{product.handle}}"
        product_id="{{product.id}}"
        title_product="{{product.title}}"
        image_product="{{ product.featured_image.src | img_url: '100x' }}"
      ></ryviu-widget>
    </div>
    `,
    'Featured Reviews': `<ryviu-feature-extend carousel="1" id="r--ryviu-widget"></ryviu-feature-extend>`,
    'Question & Answers': `
      <div class="lt-block-reviews">
        <questions-answers handle="{{product.handle}}" product_id="{{product.id}}"></questions-answers>
      </div>
    `,
  },
  'LAI AliExpress Reviews': {
    Reviews: `
    <div class="scm-container custom" style="display: none;">
      <div id="scm-reviews-importer" class="scm-reviews-importer">
        <iframe id="scm-reviews-importer-iframe" width="100%"></iframe>
      </div>
    </div>
    `,
    'Star Ratings': `
    <a href="#scm-reviews-importer">
      <div id="scm-product-detail-rate" class="scm-reviews-rate" data-rate-version2="{{ product.metafields.scm_review_importer.reviewsData.reviewCountInfo | json | escape}}"></div>
    </a>
    `,
    'Homepage Reviews': `
    {% capture lai_snippet_homepage %}
      {% render 'lai-home-page' %}
    {% endcapture %}
    {% if lai_snippet_homepage contains 'Liquid error' %}
      {% capture lai_reviews_section %}
        {% section 'reviews-importer-section' %}
      {% endcapture %}
      {% unless lai_reviews_section contains 'Liquid error' %}
        {{ lai_reviews_section }}
      {% endunless %}
    {% else  %}
      {{ lai_snippet_homepage }}
    {% endif %}
    `,
  },
};
