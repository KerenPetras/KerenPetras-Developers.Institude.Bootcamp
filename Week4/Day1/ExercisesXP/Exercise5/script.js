// ð Exercise 5 : Colors #2
// Instructions
// Using these arrays :

// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
// const ordinal = ["th","st","nd","rd"];
// Write a JavaScript program that displays the colors in the following order : â1st choice is Blue .â â2nd choice is Green.â â3rd choice is Red.â ectâ¦
// Hint : Use the array methods taught in class and ternary operator.

const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th", "st", "nd", "rd"];

colors.forEach((color, index) => {
console.log(
`${index + 1}${ ordinal[index % 100 > 10 && index % 100 < 14 ? 0 : index % 10] } choice is ${color}.`
);
});
