// 🌟 Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// <form>
//   <label for="fname">First name:</label><br>
//   <input type="text" id="fname" name="fname"><br>
//   <label for="lname">Last name:</label><br>
//   <input type="text" id="lname" name="lname"><br><br>
//   <input type="submit" value="Submit" id="submit">
// </form> 
// <ul class="usersAnswer"></ul>


// Retrieve the form and console.log it.

// Retrieve the inputs by their id and console.log them.

// Retrieve the inputs by their name attribute and console.log them.

// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>

//PART 1
const form = document.querySelector("form");
console.log(form);

//PART 2
const firstName = document.getElementById("fname");
const lastName = document.getElementById("lname");

console.log(firstName);
console.log(lastName);

//PART 3
const inPutfirstName = document.querySelector('input[name="fname"]');
console.log(inPutfirstName);

const inPutlastName = document.querySelector('input[name="lname"]');
console.log(inPutlastName);

//PART 4
const usersAnswer = document.querySelector('.usersAnswer');

form.addEventListener("submit", function(event) {
    event.preventDefault();
    const firstNameValue = firstName.value;
    const lastNameValue = lastName.value;
    
    if (firstNameValue !== "" && lastNameValue !== "") {
        const firstNameLi = document.createElement("li");
        firstNameLi.textContent = firstNameValue;
        usersAnswer.appendChild(firstNameLi);
        
        const lastNameLi = document.createElement("li");
        lastNameLi.textContent = lastNameValue;
        usersAnswer.appendChild(lastNameLi);
    }
});
