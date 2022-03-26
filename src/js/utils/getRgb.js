import { hexToRgb } from "./hexToRgb.js";

export const getRgb = (color) => {
  if (color.includes("#")) {
    const { r, g, b } = hexToRgb(color);
    return `${r}, ${g}, ${b}`;
  }
  if (color.includes("rgb(")) {
    return color.replace(/rgb\(|\)/g, "");
  }
  return color.replace(/(rgba\()(.*(?=,)).*/g, "$2");
};
