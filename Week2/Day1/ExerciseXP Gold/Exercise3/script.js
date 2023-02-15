// Exercise 3 : Calculator
// Instructions
// Make a Calculator. Follow the instructions:

// Prompt the user for the first number.
// Store the first number in a variable called num1.
// Hint : console.log the type of the variable num1. What should you do to convert it to a number ?
// Prompt the user for the second number.
// Store the second number in a variable called num2.
// Create an Alert where the value is the SUM of num1 and num2.
// BONUS: Make a program that can subtract, multiply, and also divide!

let num1=parseFloat(prompt("Enter your first number: "));
let num2=parseFloat(prompt("Enter your second number: "));
let plus= num1 + num2;
alert(`the sum of ${num1} and ${num2} is ${plus}`);

// multi
let multi = num1 * num2;
alert(`the sum of ${num1} and ${num2} is ${multi}`);

//divide
let divide = num1 / num2;
alert(`the sum of ${num1} and ${num2} is ${divide}`);

//subsctrac
let sub = num1 - num2;
alert(`the sum of ${num1} and ${num2} is ${sub}`);
