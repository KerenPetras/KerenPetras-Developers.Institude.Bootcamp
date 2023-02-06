// 🌟 Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.
function makeJuice(size) {
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      console.log(`The client wants a ${size} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`);
    }
  
    addIngredients("apple", "banana", "carrot");
  }
  
  makeJuice("medium");
  

// Part II:
// In the makeJuice function, create an empty array named ingredients.
function makeJuice(size) {
    var ingredients = [];
  
    function addIngredients(ingredient1, ingredient2, ingredient3) {
      ingredients.push(ingredient1, ingredient2, ingredient3);
    }
  
    function displayJuice() {
      console.log(`The client wants a ${size} juice, containing `);
      ingredients.forEach(function(ingredient) {
        console.log(ingredient);
      });
    }
  
    addIngredients("apple", "banana", "carrot");
    addIngredients("lemon", "ginger", "cucumber");
  
    displayJuice();
  }
  
  makeJuice("large");
  
// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.
