// 🌟 Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.
// // #1
// function funcOne() {
//     let a = 5;
//     if(a > 1) {
//         a = 3;
//     }
//     alert(`inside the funcOne function ${a}`);
// }

//PREDICTION #1
/// First of all, we didn't called the function so there will be an error
/// Results: undefined.

// // #1.1 - run in the console:
// funcOne()
// // #1.2 What will happen if the variable is declared 
// // with const instead of let ?
/// Answer: There will be an error because you cannot redeclare a const.


//#2
// let a = 0;
// function funcTwo() {
//         a = 5;
//     }

//PREDICTION #2
///Answer will be 5 when the function will be called, because it was a global declaration.
/// after running it results are undefined.
    
// function funcThree() {
//     alert(`inside the funcThree function ${a}`);
// }

// // #2.1 - run in the console:
// funcThree() -- Prediction, function [0] (from the global declaration)
// funcTwo() -- prediction, function block result 5 because of the new declaration.
// funcThree() -- undefined

// // #2.2 What will happen if the variable is declared 
// // with const instead of let 
///Results: with a const declaration the new val cannot be changed.


// //#3
// function funcFour() {
//     window.a = "hello";
// }

// function funcFive() {
//     alert(`inside the funcFive function ${a}`);
// } 


// // #3.1 - run in the console:
// funcFour()
// funcFive()
//Predictions // It will not excuted, because the declaration are in a functions blocks.
///Results : It took the val from the funcFour declaration.

// //#4
// let a = 1;
// function funcSix() {
//     let a = "test";
//     alert(`inside the funcSix function ${a}`);
// }


// // // #4.1 - run in the console:
// funcSix()

//Results , inside the funcSix function test, it took the declaration from function block.
// // #4.2 What will happen if the variable is declared 
// // with const instead of let ?
///Results will not be excuted because you cannot redeclare a val with const.

// // //#5
// let a = 2;
// if (true) {
//     let a = 5;
//     alert(`in the if block ${a}`);
// }
// alert(`outside of the if block ${a}`);

// // #5.1 - run the code in the console
/// first conditon will excuted the alert will be with a = 5, 
//// afterwards the second will be 2 in the global declaration.

// // #5.2 What will happen if the variable is declared 
// // with const instead of let ?
//// cannot be decaled once a was already declared in global.
