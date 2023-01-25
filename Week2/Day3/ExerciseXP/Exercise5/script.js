// 🌟 Exercise 5 : Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.

//Part1
const family = {
    dad: 'Peter',
    mom: 'Maria',
    sister: 'Kristine',
    me:'Keren',
}

//Part2
for (let i in family) {
  console.log(i);
};

//Part3
for (let i in family){
    console.log(family[i]);
};
