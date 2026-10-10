/** True when the value is a string made only of digits (e.g. "12"). */
export const isNumericId = (value) => /^\d+$/.test(value);
