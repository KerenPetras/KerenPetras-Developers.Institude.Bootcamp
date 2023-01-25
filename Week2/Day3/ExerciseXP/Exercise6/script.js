// Exercise 6 : Rudolf
// Instructions

const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'raindeer'
}
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const values =Object.values(details);
const keys = Object.keys(details);
let sentence = "";

// console.log(keys); //checks what is the output my,is,the
// console.log(values); // checks what is the output name, rudolf, raindeer


for (let i = 0; i < keys.length; i++) {
    sentence += ` ${keys[i]} ${details[keys[i]]}`;
}
console.log(sentence);