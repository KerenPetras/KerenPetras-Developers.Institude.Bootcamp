// 🌟 Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?

//PART 1 
let num=+prompt("Insert a random number: ");
console.log(typeof(num));

//PART 2
while (num<10) {
    num=+prompt("Insert a random number: ");
}
console.log(typeof(num))
