// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words

// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.

// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)

// Prompt the user for input
// Put the words into an array.
// Hello,hi,morning
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.

// Prompt the user for input
let input = prompt("Enter several words separated by commas: ");

// Split the input into an array of words
let words = input.split(", ");

// Find the length of the longest word
let maxLength = 0;
for (let i = 0; i < words.length; i++) {
    if (words[i].length > maxLength) {
        maxLength = words[i].length;
    }
}

// Add the top and bottom of the frame
let frame = "*".repeat(maxLength + 4) + "\n";

// Add the words to the frame
for (let i = 0; i < words.length; i++) {
    frame += "* " + words[i] + " ".repeat(maxLength - words[i].length) + " *\n";
}

frame += "*".repeat(maxLength + 4);

console.log(frame);


