// Exercise 1:
// Using this array :

// const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];
// Remove Banana from the array.
// Sort the array in alphabetical order.
// Add “Kiwi” to the end of the array.
// Remove “Apples” from the array. Don’t use the same method as in part 1.
// Sort the array in reverse order. (Not alphabetical, but reverse the current Array i.e. [‘a’, ‘c’, ‘b’] becomes [‘b’, ‘c’, ‘a’])
// At the end you should see this outcome:
// ["Kiwi", "Oranges", "Blueberries"]

const fruits = ["Banana", "Apples", "Oranges", "Blueberries"];

//Part1
fruits.shift();
console.log(fruits);

//Part2
fruits.sort();
console.log(fruits);

//Part3
fruits.push('Kiwi');
console.log(fruits);

//Part 4
fruits.splice(0,1);
console.log(fruits);

//Part 5
fruits.reverse();
console.log(fruits);
