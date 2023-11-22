 import { sum } from "./sum.js";
 import { capitalize } from "./capitalize.js";
 import { reverseString } from "./reverseString.js";
 import { calculate } from "./calculator.js";

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1,2)).toBe(3);
});

test('First letter is capital', () => {
    const capitalizedString = capitalize('string');
    expect(/^[A-Z]/.test(capitalizedString)).toBe(true);
  });

test('Reverse the string', () => {
    const string = 'reversed';
    const reverseTheString = reverseString(string);
    expect(reverseTheString).toBe('desrever');
})


test('1 + 2 equals 3', () => {
    expect(calculate.add(1,2)).toBe(3);
})