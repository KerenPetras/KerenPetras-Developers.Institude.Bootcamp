const fs = require('fs');
const characters = fs.readFileSync('RightLeft.txt','utf-8').split("");

//read file
// const readDate = fs.readFileSync('RightLeft.txt');
// console.log(`${readDate}`);

//add ',' between each > < using split method and for loop to add each to every character

const content = fs.readFileSync('RightLeft.txt', 'utf-8');
// const steps = content.split('').reduce((acc, curr) => {
//   if (curr === '<') {
//     return acc - 1;
//   } else if (curr === '>') {
//     return acc + 1;
//   } else {
//     return acc;
//   }
// }, 0);

// const direction = steps < 0 ? 'left' : 'right';
// console.log(`${Math.abs(steps)} steps to the ${direction}`);

//part 2
let position = 0;
let counts = 0;
let foundNegative = false;

for (const character of characters) {
  if (character === "<") {
    position--;
  } else if (character === ">") {
    position++;
  }
  
  counts++;
  
  if (position === -1 && !foundNegative) {
    console.log(`Reached -1 at step ${counts}`);
    foundNegative = true;
  }
}

if (!foundNegative) {
  console.log("Did not reach -1");
} else {
  console.log(`Total steps taken: ${counts}`);
}