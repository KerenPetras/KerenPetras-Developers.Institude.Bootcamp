// 🌟 Exercise 3 : Change The Navbar
// Instructions
// <div id="navBar">
//     <ul>
//         <li><a href="#">Profile</a></li>
//         <li><a href="#">Home</a></li>
//         <li><a href="#">My Friends</a></li>
//         <li><a href="#">Messenger</a></li>
//         <li><a href="#">My Pics</a></li>
//     </ul>
// </div>


// Add the code above, to your HTML file // DONE

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.
const nav = document.querySelector("#navBar")
nav.setAttribute('id',"socialNetworkNavigation");
console.log(nav); //new id

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
const ul4 =nav.children[0];
const newLi = document.createElement("li")
newLi.textContent= "Logout";
// Append the text node to the newly created list node (<li>).
ul4.appendChild(newLi);
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).
console.log(ul4.firstElementChild.textContent)
console.log(ul4.lastElementChild.textContent)


