"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderPage = void 0;
var constants_1 = require("../../constants/constants");
exports.builderPage = {
  fields: {
    reorder:
      "This arrangement only helps you manage the settings below, but does not affect the content of the page.",
  },
  schema: {
    settings: {
      title: "Settings",
      text: "Lorem ipsum dolor sit amet",
    },
    blocks: {
      title: "Blocks",
      text: "Lorem ipsum dolor sit amet",
    },
    error: {
      existed: '"%% name %%" is declared in schema',
      is_shopify_variable: '"%% name %%" is shopify variable',
    },
  },
  theme_settings: {
    general: {
      title: "General",
      text: "The general setting for current theme",
    },
    colors: {
      title: "Colors",
      text: "Manage colors variations",
      content: {
        title: "Custom colors for theme",
        text: "You can edit or add colors below",
      },
    },
    fonts: {
      title: "Fonts",
      text: "Manage all font variations",
      content: {
        title: "Custom fonts",
        text: "You can edit or add fonts below",
      },
    },
    layout: {
      title: "Layout",
      text: "Manage layout for site",
    },
    vendors: {
      title: "Vendors",
      text: "Add External Css & Javascript for theme",
    },
    scss: {
      title: "SCSS (CSS)",
      text: "Add global SCSS for theme",
    },
    js: {
      title: "Javascript",
      text: "Add global Javascript for theme",
    },
    content: {
      colors: {
        title: "Custom colors",
        text: "You can edit or add colors below (Note the variable name used when you edit the CSS code)",
      },
      fonts: {
        title: "Custom fonts",
        text: "You can edit or add fonts below (Note the variable name used when you edit the CSS code)",
      },
    },
  },
  page_settings: {
    general: {
      title: "General",
      text: "The general setting for current page",
    },
    vendors: {
      title: "Vendors",
      text: "Add External Css & Javascript",
    },
    scss: {
      title: "SCSS (CSS)",
      text: "Add global SCSS for page",
    },
    js: {
      title: "Javascript",
      text: "Add global Javascript for page",
    },
    import: {
      title: "Import file",
      text: "Import file *.".concat(
        constants_1.Consts.AppName,
        " to continue editing the current page"
      ),
      select_options: "Select options to import",
      error: "Your file is corrupted",
      upload_successfully: "Upload successfully",
      upload_failed: "Upload failed",
      options: {
        page_data: "Page data",
        page_settings: "Page settings",
        theme_settings: "Theme settings",
      },
    },
    general_settings: {
      meta_title_placeholder: "Meta title will be shown here",
      meta_description_placeholder: "Meta description will be shown here",
      general: {
        title: "General",
        text: "Lorem ipsum dolor sit amet",
        name: "Page name",
        enable_header_footer: "Enable Theme Header & Footer",
      },
      seo: {
        title: "SEO",
        text: "Lorem ipsum dolor sit amet",
        url_slug: {
          title: "URL slug",
          text: "Lorem ipsum dolor sit amet",
        },
        meta_title: {
          title: "Meta title",
          text: "Lorem ipsum dolor sit amet",
        },
        meta_description: {
          title: "Meta description",
          text: "Lorem ipsum dolor sit amet",
        },
      },
      social_share: {
        title: "Social share",
        text: "Lorem ipsum dolor sit amet",
      },
    },
  },
  layout_settings: {
    container_width: {
      title: "Container width",
      text: "Set the default width of the content area (Default: %% size %%px)",
    },
    container_gap: {
      title: "Container gap",
      text: "Set the default column gap (Default: %% size %%px)",
    },
    column_gap_vertical: {
      title: "Column gap vertical",
      text: "Set the default space between elements (Default: %% size %%px)",
    },
    column_gap_horizontal: {
      title: "Column gap horizontal",
      text: "Set the default space between elements (Default: %% size %%px)",
    },
  },
  theme_general_settings: {
    preloader: {
      title: "Preloader",
      text: "",
      testing: "Run for 2 seconds after you click the Ok button.",
    },
    favicon: {
      title: "Favicon",
      text: "",
    },
  },
  mega_menu: {
    choose_setting: "Choose setting",
    warning: "You cannot add children to this item when you enable mega menu",
    icon: "Icon",
    hot_pot: "Hot pot",
    navigation: "Navigation",
  },
};
