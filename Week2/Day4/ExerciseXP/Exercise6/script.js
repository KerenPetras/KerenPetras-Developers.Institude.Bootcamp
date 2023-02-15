// 🌟 Exercise 6 : Vacations Costs
// Instructions
// Let’s create functions that calculate your vacation’s costs:

// Define a function called hotelCost().
// It should ask the user for the number of nights they would like to stay in the hotel.
// If the user doesn’t answer or if the answer is not a number, ask again.
// The hotel costs $140 per night. The function should return the total price of the hotel.

// hotelCost function
function hotelCost() {
    let nights;
    do {
      nights = prompt("How many nights would you like to stay in the hotel?");
      if (isNaN(nights) || nights === "") {
        alert("Invalid input. Please enter a valid number.");
      }
    } while (isNaN(nights) || nights === "");
    let cost = nights * 140;
    console.log(`The hotel cost for ${nights} nights is: $${cost}.`);
    return cost;
  }

  console.log(typeof nights());
//hotelCost(); //TEST

// Define a function called planeRideCost().
// It should ask the user for their destination.
// If the user doesn’t answer or if the answer is not a string, ask again.
// The function should return a different price depending on the location.
// “London”: 183$
// “Paris” : 220$
// All other destination : 300$

function planeRideCost() {
    let destination;
    do {
      destination = prompt("What is your destination?");
      if (destination === "" || typeof destination !== "string") {
        alert("Invalid input. Please enter a valid destination.");
      }
    } while (destination === "" || typeof destination !== "string");
  
    let cost;
    if (destination === "London") {
      cost = 183;
    } else if (destination === "Paris") {
      cost = 220;
    } else {
      cost = 300;
    }
    
    console.log(`The plane ticket cost for ${destination} is: $${cost}.`);
    return cost;
  }
//planeRideCost();  //TEST

// Define a function called rentalCarCost().
// It should ask the user for the number of days they would like to rent the car.
// If the user doesn’t answer or if the answer is not a number, ask again.
// Calculate the cost to rent the car. The car costs $40 everyday.
// If the user rents a car for more than 10 days, they get a 5% discount.
// The function should return the total price of the car rental.

function rentalCarCost() {
    let days;
    do {
      days = prompt("How many days would you like to rent the car for?");
      if (days === "" || isNaN(days)) {
        alert("Invalid input. Please enter a valid number of days.");
      }
    } while (days === "" || isNaN(days));
  
    let cost = days * 40;
    if (days > 10) {
      cost *= 0.95;
    }
    
    console.log(`The total cost of renting the car for ${days} days is: $${cost}.`);
    return cost;
  }
//rentalCarCost();  //TEST

// Define a function called totalVacationCost() that returns the total cost of the user’s vacation by calling the 3 functions that you created above.
// Example : The car cost: $x, the hotel cost: $y, the plane tickets cost: $z.
// Hint: You have to call the functions hotelCost(), planeRideCost() and rentalCarCost() inside the function totalVacationCost().

function totalVacationCost() {
    let total = hotelCost() + planeRideCost() + rentalCarCost();
    console.log(`The total cost of the vacation is: $${total}`);
}

totalVacationCost();

// Call the function totalVacationCost()
// Bonus: Instead of using a prompt inside the 3 first functions, only use a prompt inside the totalVacationCost() function. You need to change the 3 first functions, accordingly.
