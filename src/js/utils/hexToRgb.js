function checkHex(hex) {
  if (hex.length === 4) {
    const [r, g, b] = hex.replace("#", "").split("");
    return `#${r}${r}${g}${g}${b}${b}`;
  }
  return hex;
}

export function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(
    checkHex(hex)
  );
  return {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16),
  };
}
