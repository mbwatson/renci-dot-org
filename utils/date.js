/**
 * Checks if a JS Date object is valid
 */
export const isValidDate = (d) => {
  if (!(d instanceof Date)) return false;
  return d.toUTCString() !== "Invalid Date"
}