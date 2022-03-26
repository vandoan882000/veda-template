import { loadStyle } from "../utils/loadStyle.js";
import { stringHash } from "../utils/stringHash.js";
import { autoResponsive } from "../utils/autoResponsive.js";

/**
 *
 * @param {HTMLElement} el
 */
const splitInlineStyles = (el) => {
  let css = "";
  const style = el.getAttribute("css");
  const dataCssValue = stringHash(style);
  const id = `id_${dataCssValue}`;
  const defaultStyles = autoResponsive(
    style
      .replace(/start\/hover:.*end\/hover/g, "")
      .replace(/;start\/animate.*end\/animate/g, "")
  );
  const hoverStyles = autoResponsive(
    style.includes("start/hover:")
      ? style
          .replace(/.*start\/hover:|end\/hover.*/g, "")
          .replace(/;start\/animate.*end\/animate/g, "")
      : ""
  );
  const animateClasses = style.includes("start/animate")
    ? style.replace(/.*start\/animate/g, "").replace(/end\/animate/g, "")
    : "";
  if (!!defaultStyles) {
    css += `html [data-css="${dataCssValue}"] {${defaultStyles}}\n`;
  }
  if (!!hoverStyles) {
    css += `html [data-css="${dataCssValue}"]:hover {${hoverStyles}}\n`;
  }
  if (!style?.replace(/start\/hover:end\/hover/g, "")) {
    return;
  }
  loadStyle({ id, content: css });
  el.setAttribute("data-css", dataCssValue);
  el.removeAttribute("css");
};

function handleCssInline() {
  const cssEls = document.querySelectorAll("[css]");
  cssEls.forEach(splitInlineStyles);
}

handleCssInline();
