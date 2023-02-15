// Exercise 1 : Analyzing
// Instructions
// Analyze these pieces of code before executing them. What will be the outputs ?
// ------1------
// const fruits = ["apple", "orange"];
// const vegetables = ["carrot", "potato"];


// const result = ['bread', ...vegetables, 'chicken', ...fruits];
// console.log(result);

// ["bread", "carrot", "potato", "chicken", "apple", "orange"]
// The ... operator is used to spread elements of an array into a new array. 
// In this case, vegetables and fruits arrays are spread into the result array, resulting in a new array with the elements ['bread', "carrot", "potato", "chicken", "apple", "orange"].
// ------2------
// const country = "USA";
// console.log([...country]);

// ["U", "S", "A"]


// ------Bonus------
// let newArray = [...[,,]];
// console.log(newArray);

//[]

