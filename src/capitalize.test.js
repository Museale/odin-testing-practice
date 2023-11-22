import { capitalize } from "./capitalize.js";

test('First letter is capital', () => {
  const capitalizedString = capitalize('string');
  expect(/^[A-Z]/.test(capitalizedString)).toBe(true);
});