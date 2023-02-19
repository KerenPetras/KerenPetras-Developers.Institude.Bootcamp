// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];

Output:["bread", "carrot", "potato", "chicken", "apple", "orange"]
//The spread operator "...", when used with an array, expands the elements of that array into a new array. In the given code snippet, the spread operator is used to expand the elements of the "vegetables" and "fruits" arrays and add them to the "result" array. The "result" array is then printed to the console, which outputs ["bread", "carrot", "potato", "chicken", "apple", "orange"].

// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// The ... operator is used to spread elements of an array into a new array. 
// In this case, vegetables and fruits arrays are spread into the result array, resulting in a new array with the elements ['bread', "carrot", "potato", "chicken", "apple", "orange"].
// ------2------
// const country = "USA";
// console.log([...country]);

// ["U", "S", "A"]

Output:
["U", "S", "A"]
//In this code snippet, the spread operator is used to expand the characters of the "country" string into an array. The resulting array contains the characters of the string as separate elements. When this array is printed to the console, it outputs ["U", "S", "A"].

// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

// []
