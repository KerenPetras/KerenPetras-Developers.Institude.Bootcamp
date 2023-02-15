// Exercise 2 : Mixup
// Instructions
// Create 2 variables. The values should be strings. For example:
// let str1 = "mix";
// let str2 = "pod";

// 2. Slice out and swap the first 2 characters of the two strings from part 1.
let str1 = "Hello"; // ${str1.slice(2)} output 'llo'
let str2 = "World";// ${str2.slice(2)} output 'rld'

// 3. Create a third variable where the value is the concatenation of the two strings from the part 1 (separated by a space).
let result = `${str2.slice(0,2)}${str1.slice(2)} ${str1.slice(0,2)}${str2.slice(2)}`;

// 4. Finally console.log the new concatenated string.
console.log(result);

// Some Examples

// let str1 = "mix";
// let str2 = "pod";
// let newWord should be equal to 'pox mid'

// let firstWord = "Hello";
// let secondWord = "World";
// let thirdWord should be equal to 'Wollo Herld'




