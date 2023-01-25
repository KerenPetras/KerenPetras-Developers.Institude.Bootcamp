// 🌟 Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


//PART 1
const people = ["Greg", "Mary", "Devon", "James"];
const noGreg = people.splice(1);
console.log(noGreg);

//PART 2
const noJames = noGreg.splice(0,2);
console.log(noJames);
noJames.push("Jason");
console.log(noJames);

//PART 3
noJames.push("Keren");
console.log(noJames);

//PART 4
console.log(noJames.indexOf("Mary"));

//PART 5
const newPeople = ["Mary", "Devon", "Jason", "Keren"];
console.log(newPeople.slice(1,-1));

//PART 6 
console.log(newPeople.indexOf("Foo")); //it will always be negative 1 when the index doesnt exist

//SECTION II part 1
for (let i = 0; i <newPeople.length; i++) {
    if (newPeople[i] !== "Jason") {
    console.log(newPeople[i])} // print the names of the people}
    else break; // stop printing when it counters "Jason"
}