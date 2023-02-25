// 10. How would you call the `foo` function in the console.log, in order to display what the `bar` function returns ? Explain the process and concept behind it

//      ```javascript
//      function foo () {
//        function bar() {
//          return "Poppin' bottles";
//        }
//        return bar;
//      }
     
//      console.log(?)
//      ```

// To call the bar function and display its return value in the 
// console.log(), we need to invoke the foo() function first, 
// which returns the bar function. We can then call the returned 
// function by adding a set of parentheses after it

// console.log(foo()());

