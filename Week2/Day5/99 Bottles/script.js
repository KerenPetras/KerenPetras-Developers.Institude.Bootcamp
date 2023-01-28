// Prompt user for starting number of bottles
const num = parseInt(prompt("Enter a number to start counting down from:"));

// Initialize counter for subtracted number
let subtracted = 0;

// Loop through each number from the starting number to 0
for (let i = num; i >= 0; i--) {
  if (i === 1) {
    console.log(`${i} bottle of beer on the wall`);
    console.log(`${i} bottle of beer`);
    console.log(`Take ${++subtracted} down, pass it around`);
  } else if (i === 0) {
    console.log("No bottles of beer on the wall");
  } else {
    console.log(`${i} bottles of beer on the wall`);
    console.log(`${i} bottles of beer`);
    console.log(`Take ${++subtracted} down, pass them around`);
  }
}
