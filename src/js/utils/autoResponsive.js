import { cssLinearInterpolation } from "./cssLinearInterpolation.js";

/**
 * @description Tự động responsive cho font, padding, margin khi giá trị quá lớn
 */
export const autoResponsive = (style) => {
  return style
    .replace(/;/g, ";\n")
    .replace(
      /(font-size|padding-top|padding-bottom|margin-top|margin-bottom).*/g,
      (x) => {
        const prop = x.replace(/(.*(?=:))(.*)/g, "$1");
        const value = Number(x.replace(/(.*:\s*)(\d*(?=px))(.*)/g, "$2") ?? 0);
        if (value > 20) {
          const min = value / 2 + (value > 30 ? 10 : 8);
          return `${prop}: clamp(${min}px, ${cssLinearInterpolation({
            400: min,
            1200: value,
          })}, ${value}px);`;
        }
        return x;
      }
    );
};
