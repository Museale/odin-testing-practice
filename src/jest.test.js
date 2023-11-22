 import { sum } from "./sum.js";
 import { capitalize } from "./capitalize.js";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('First letter is capital', () => {
    const capitalizedString = capitalize('string');
    expect(/^[A-Z]/.test(capitalizedString)).toBe(true);
  });