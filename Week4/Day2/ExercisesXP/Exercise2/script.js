// 🌟 Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Function Declaration
function kgToGrams(weightInKg) {
    return weightInKg * 1000;
  }
  console.log(kgToGrams(5)); // 5000
  
  // Function Expression
  const kgToGramsExp = function(weightInKg) {
    return weightInKg * 1000;
  };
  console.log(kgToGramsExp(5)); // 5000
  
// Write in a one line comment, the difference between function declaration and function expression.
//The difference between function declaration and function expression:

//Function declaration is declared with the "function" keyword followed by the function name, while function expression is assigned to a variable using the "const" or "let" keyword.
///Function declaration is hoisted, meaning it can be called before it is defined in the code, while function expression is not hoisted and must be defined before it can be called.

// Finally, use a one line arrow function and invoke it.
const kgToGramsArrow = (weightInKg) => weightInKg * 1000;
console.log(kgToGramsArrow(5)); // 5000

