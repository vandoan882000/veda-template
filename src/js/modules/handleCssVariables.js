import { config } from "../config.js";
import { getRgb } from "../utils/getRgb.js";
import { loadStyle } from "../utils/loadStyle.js";

const { cssVariables } = config;

const getCssColorVariables = (colors, isDark = false, freeze = false) => {
  return colors.reduce(
    (str, item) =>
      `${str}${item.name}${freeze ? "-freeze" : ""}:${
        item[isDark ? "dark" : "light"]
      };${item.name.replace(/^--/g, "--rgb-")}${
        freeze ? "-freeze" : ""
      }:${getRgb(item[isDark ? "dark" : "light"])};`,
    ""
  );
};

const getCssFontVariables = (fonts) => {
  return fonts.reduce((str, item) => `${str}${item.name}:${item.value};`, "");
};

const variables = `:root { ${getCssColorVariables(
  cssVariables.colors,
  false
)}${getCssColorVariables(
  cssVariables.colors,
  false,
  true
)}${getCssFontVariables(
  cssVariables.fonts
)} } :root.dark { ${getCssColorVariables(cssVariables.colors, true)} }`;

const linkFont = cssVariables.fonts.reduce(
  (str, item) =>
    `${str}<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=${item.value.replace(
      /\s/g,
      "+"
    )}:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />\n`,
  ""
);

loadStyle({ content: variables });

document.head.insertAdjacentHTML("beforeend", linkFont);
