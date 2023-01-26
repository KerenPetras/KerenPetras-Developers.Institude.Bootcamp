
// 🌟 Exercise 2 : Tips
// Instructions
// John created a simple tip calculator to help calculate how much to tip when he and his family go to restaurants.

// Create a function named calculateTip() that takes no parameter.

// Inside the function, use prompt to ask John for the amount of the bill.

// Here are the rules
// If the bill is less than $50, tip 20%.
// If the bill is between $50 and $200, tip 15%.
// If the bill is more than $200, tip 10%.

function calculateTip() {
    const bill=+prompt("How much is the bill? ");
    if (bill > 200 ) {
        alert(` The tip for the bill is ${bill*0.10}, and together with the tip the bill is ${(bill*0.10)+bill} `);
    } else if (bill >= 50 && bill <= 200) {
        alert(` The tip for the bill is ${bill*0.15} , and together with the tip the bill is ${(bill*0.15)+bill} `)
    } else {alert(` The tip for the bill is ${bill*0.20} , and together with the tip the bill is ${(bill*0.20)+bill} `)}
}

calculateTip();