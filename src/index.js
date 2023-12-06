import { capitalize } from "./capitalize";
import { sum } from "./sum";
import { reverseString } from "./reverseString";
import { calculate } from "./calculator";
import { caesarCipher } from "./caesarCipher";
import { analyzeArray } from "./analyzeArray";


console.log(capitalize('hi, there'));
console.log(sum(1,2));
console.log(reverseString('Reversed'));
console.log(calculate.add(1,2));
console.log(caesarCipher('Hello there', 7));
console.log(caesarCipher('Julius Caesar', 3))
console.log(analyzeArray([1, 8, 3, 4, 2, 6]));