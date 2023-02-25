// 7. Variables created **without** any keyword, are always global, even if they are created inside a function ? Yes or No and explain

//     ```javascript
//     function x() {
//     	a = 5;
//     }
//     ```

/////Yes, variables created without the var, let, or const keyword are always global, even if they are created inside a function.
////This means that a will be treated as a global variable and added to the global scope, rather than being scoped to the function