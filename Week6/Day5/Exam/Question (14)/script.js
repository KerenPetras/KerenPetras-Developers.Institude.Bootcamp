// #### Array Methods : forEach, map, filter, reduce, find, every, some

// 14. Do this exercise twice: first with a `for loop`, then with a `for of loop`.
// Console.log the sum of this array

//     ```javascript
//        const marks = [67, 60, 89, 90, 67, 42];
//     ```
///for lop
const marks = [67, 60, 89, 90, 67, 42];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
  sum += marks[i];
}

console.log(sum); // Output: 415


//for of lop
const marks = [67, 60, 89, 90, 67, 42];
let sum = 0;

for (const mark of marks) {
  sum += mark;
}

console.log(sum); // Output: 415
