// 🌟 Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

// For example

// console.log(2+3)
// // Prediction: It will output 5, because 2 and 3 are numbers
// // Actual: 5

// Using the code below:

//      let c;
//      let a = 34;
//      let b = 21;

//      console.log(a+b) //first expression
//     // Prediction:
//     // Actual: 

//      a = 2;

//      console.log(a+b) //second expression
//     // Prediction:
//     // Actual: 

// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?

// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');

//ANSWERS
let c;
let a = 34;
let b = 21;

console.log(a+b) //first expression
// Prediction: It will output 55, because a and b are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: It will output 23, because the the new val overide the first declaration
// Actual: 23;

console.log(c);
// The value of c is undefined because we didn't gave the val any declaration of a any data type; 

console.log(3+4+'5')
//prediction: The output will be 75, first it will calculate the numbers which are
//3 and 4 which makes 7, and because 5 is a string it will add up next to the new number 7;
//Actual: 75