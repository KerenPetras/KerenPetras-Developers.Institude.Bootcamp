// #### Functions

// 8. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

//     ```javascript
//     function sayHello() {
//        return "Hello, ";
//     }
//     function greeting(helloMessage, name) {
//       console.log(helloMessage() + name);
//     }
//     greeting(sayHello, "JavaScript!");
//     ```

///output : "Hello Javascript", The sayHello function returns the string "Hello, ", and the greeting function takes two arguments: a function (helloMessage) and a string (name). 