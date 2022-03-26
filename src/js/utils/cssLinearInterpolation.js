/**
 * Given a dictionary of key-value pairs, return a CSS linear interpolation
 * @param value - Record<number, number>
 * @returns A string that can be used in a CSS calc() function.
 */
export const cssLinearInterpolation = (value) => {
  const keys = Object.keys(value);
  const values = Object.values(value);
  if (keys.length !== 2) {
    throw new Error("linearInterpolation() value must be exactly 2 values");
  }
  // The slope
  const m = (values[1] - values[0]) / (Number(keys[1]) - Number(keys[0]));
  // The y-intercept
  let b = values[0] - m * Number(keys[0]);
  // Determine if the sign should be positive or negative
  let sign = "+";

  if (b < 0) {
    sign = "-";
    b = Math.abs(b);
  }

  return `${m * 100}vw ${sign} ${b}px`;
};
