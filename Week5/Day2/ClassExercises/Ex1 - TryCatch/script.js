// Exercise 1 Exception
// Create a function that checks if an email contain the '@', if it doesnt, throw an error and catch it
// checkEmail("johnsmith.com") // throw an exception that is caught
// checkEmail("john@smith.com")  // will still run because the exception was caught

// const email = "johnsmith.com"
// const email2 = "johnsmith@.com"

// function checkEmail() {
//     if (email.includes("@")) {
//         console.log("The email contains @")
//     } else console.log ("the email doesnt contains @")
// }

// try {
//     checkEmail();
// } catch (error) {
//     console.error(error);
// }

// function checkEmail (userEmail) {
//     try {
//         if(!userEmail.includes("@")) {
//             throw new Error ("Yout email is incorrect");
//         }
//     } 
//         catch (err) {
//             console.log(`An error happend ${err.message}`)
//         }
//     }

// Exercise 2
// Using the code below:
// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")
// Which type of error will be thrown ? Look on the different types errors on Google
// Is the console.log("after") will be shown on the console ?

// const someVar = 'Cannot be reassigned';
// try {
//   someVar = 'Still going to try';
// } catch(e) {
//   console.log(e);
// }

// console.log("after")
//trying to change the const when it cannot be changed.
