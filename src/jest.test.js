import { sum } from "./sum.js";
import { capitalize } from "./capitalize.js";
import { reverseString } from "./reverseString.js";
import { calculate } from "./calculator.js";
import { caesarCipher } from "./caesarCipher.js";
import { analyzeArray } from "./analyzeArray.js";


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
});

test('1 + 2 equals 3', () => {
    expect(calculate.add(1,2)).toBe(3);
});

test('2 - 1 equals 1', () =>  {
    expect(calculate.subtract(2,1)).toBe(1);
});

test('10 / 2 equals 5', () => {
    expect(calculate.divide(10,2)).toBe(5);
});

test('5 * 2 equals 10', () => {
    expect(calculate.multiply(5,2)).toBe(10);
});

test('Shifts alphabet 3 keys and returns the correct cipher', () => {
    const string = 'Julius Caesar';
    const cipheredString = caesarCipher(string, 3);
    expect(cipheredString).toBe('mxolxv fdhvdu');
});

test('Analyze given array', () => {

    const array = [1, 8, 3, 4, 2, 6];
    const analyzedArray = analyzeArray(array);

    expect(analyzedArray).toStrictEqual({
        average: 4,
        min: 1,
        max: 8,
        length: 6
        });
});