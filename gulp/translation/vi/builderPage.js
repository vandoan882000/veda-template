"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.builderPage = void 0;
var constants_1 = require("../../constants/constants");
exports.builderPage = {
  fields: {
    reorder:
      "Việc sắp xếp này chỉ giúp bạn quản lý mục cài đặt phía dưới chứ không ảnh hưởng tới nội dung của trang.",
  },
  schema: {
    settings: {
      title: "Cài đặt",
      text: "Lorem ipsum dolor sit amet",
    },
    blocks: {
      title: "Khối",
      text: "Lorem ipsum dolor sit amet",
    },
    error: {
      existed: '"%% name %%" đã được định nghĩa',
      is_shopify_variable:
        'Bạn không thể đặt biến tên "%% name %%" vì nó là biến của shopify',
    },
  },
  theme_settings: {
    general: {
      title: "Chung",
      text: "Cài đặt chung của chủ đề hiện tại",
    },
    colors: {
      title: "Màu sắc",
      text: "Tất cả các biến thể màu",
      content: {
        title: "Tuỳ chỉnh màu sắc cho chủ đề",
        text: "Bạn có thể chỉnh sửa hoặc thêm màu ở dưới đây",
      },
    },
    fonts: {
      title: "Phông chữ",
      text: "Tất cả các phông chữ",
      content: {
        title: "Tuỳ chỉnh phông chữ",
        text: "Bạn có thể chỉnh sửa hoặc thêm phông chữ ở dưới đây",
      },
    },
    layout: {
      title: "Layout",
      text: "Manage layout for site",
    },
    vendors: {
      title: "Nhà cung cấp",
      text: "Thêm thư viện css & javascript từ bên ngoài cho chủ đề",
    },
    scss: {
      title: "SCSS (CSS)",
      text: "Thêm SCSS cho chủ đề",
    },
    js: {
      title: "Javascript",
      text: "Thêm Javascript cho chủ đề",
    },
    content: {
      colors: {
        title: "Tuỳ chỉnh màu sắc",
        text: "Bạn có thể chỉnh sửa hoặc thêm màu ở dưới đây (Lưu ý tên biến sử dụng khi bạn chỉnh sửa mã CSS)",
      },
      fonts: {
        title: "Tuỳ chỉnh phông chữ",
        text: "Bạn có thể chỉnh sửa hoặc thêm phông chữ ở dưới đây (Lưu ý tên biến sử dụng khi bạn chỉnh sửa mã CSS)",
      },
    },
  },
  page_settings: {
    general: {
      title: "Chung",
      text: "Cài đặt chung của trang hiện tại",
    },
    vendors: {
      title: "Nhà cung cấp",
      text: "Thêm thư viện css & javascript từ bên ngoài",
    },
    scss: {
      title: "SCSS (CSS)",
      text: "Thêm SCSS cho trang",
    },
    js: {
      title: "Javascript",
      text: "Thêm Javascript cho trang",
    },
    import: {
      title: "Nhập tệp",
      text: "T\u1EA3i l\u00EAn t\u1EC7p *.".concat(
        constants_1.Consts.AppName,
        " \u0111\u1EC3 ti\u1EBFp t\u1EE5c ch\u1EC9nh s\u1EEDa trang hi\u1EC7n t\u1EA1i"
      ),
      select_options: "Chọn các tùy chọn để nhập",
      error: "Tệp tin của bạn bị hỏng",
      upload_successfully: "Tải lên thành công",
      upload_failed: "Tải lên thất bại",
      options: {
        page_data: "Dữ liệu của trang",
        page_settings: "Cài đặt của trang",
        theme_settings: "Cài đặt của theme",
      },
    },
    general_settings: {
      meta_title_placeholder: "Meta title sẽ được hiển thị ở đây",
      meta_description_placeholder: "Meta description sẽ được hiển thị ở đây",
      general: {
        title: "Chung",
        text: "Lorem ipsum dolor sit amet",
        name: "Tên trang",
        enable_header_footer: "Bật Header & Footer",
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
        title: "Chia sẻ lên mạng xã hội",
        text: "Lorem ipsum dolor sit amet",
      },
    },
  },
  layout_settings: {
    container_width: {
      title: "Độ rộng của container",
      text: "Sét giá trị mặc định độ rộng của container (Mặc định: %% size %%px)",
    },
    container_gap: {
      title: "Khoảng trống 2 bên của container",
      text: "Sét giá trị mặc định cho khoảng trống 2 bên (Mặc định: %% size %%px)",
    },
    column_gap_vertical: {
      title: "Khoảng trống theo chiều ngang",
      text: "Sét khoảng trống theo chiều ngang (Mặc định: %% size %%px)",
    },
    column_gap_horizontal: {
      title: "Khoảng trống theo chiều dọc",
      text: "Sét khoảng trống theo chiều dọc (Mặc định: %% size %%px)",
    },
  },
  theme_general_settings: {
    preloader: {
      title: "Trình tải trước",
      text: "",
      testing: "Chạy trong 2 giây sau khi bạn bấm vào nút Ok",
    },
    favicon: {
      title: "Favicon",
      text: "",
    },
  },
  mega_menu: {
    choose_setting: "Chọn cài đặt",
    warning: "You cannot add children to this item when you enable mega menu",
    icon: "Biêu tượng",
    hot_pot: "Hot pot",
    navigation: "Navigation",
  },
};
