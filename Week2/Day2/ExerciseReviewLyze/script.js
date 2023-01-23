const userCart = {
 	username : "John",
 	password: 1234,
 	isUserSignedIn : true,
 	cart : {
 		apple : 2,
 		banana : 1,
 		pear : 5,
 	},
 	prices : {
 		apple : 0.5,
 		banana : 0.8646466363,
 		pear : 0.2
 	}
 };

// 1. Add the lastname Smith to the object
userCart.lastName = "Smith";
console.log(userCart)
// 2. Change the username from John to Tom
userCart.username = "Tom";
console.log(userCart);
// 2. Change the price of the pear, so it will include the Taxes. (17% is 0.17)
userCart.prices.pear*=1.17;
console.log(userCart); 

// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
const userChoice= prompt("what do you want?").toLowerCase();

// 4. Console.log the price for the specific fruit the user wants
const value =userCart.prices.userChoice;
console.log(`the price os ${userChoice} is ${value} dollars`);

