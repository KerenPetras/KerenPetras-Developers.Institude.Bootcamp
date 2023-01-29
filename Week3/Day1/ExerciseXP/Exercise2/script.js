// 🌟 Exercise 2 : Users And Style
// Instructions
// <div>Users:</div>
// <ul>
//     <li>John</li>
//     <li>Pete</li>
// </ul>


// Add the code above, to your HTML file //DONE
// Add a “light blue” background color and some padding to the <div>.
function changeColor() {
const lightBlueDiv = document.querySelectorAll("div");
for (let div of lightBlueDiv) {
    div.style.backgroundColor = "lightblue";
    }
}
changeColor();
// Do not display the <li> that contains the text node “John”.
function noJohn(){
    const orderlist = document.body.children[1];
    const itemJohn = orderlist.firstElementChild;
    console.log(itemJohn);
    itemJohn.remove();
} 
noJohn();
// Add a border to the <li> that contains the text node “Pete”.
function borderPete() {
    const border = document.body.children[1];
    console.log(border);
    border.style.border= "2px solid";
}
borderPete();

// Change the font size of the whole body.
function changeFont() {
    document.body.style.fontSize = "10px";
  }
changeFont();

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).
function alertUsers() {
    const lightBlueDiv = document.querySelectorAll("div")[0];
    if (lightBlueDiv.style.backgroundColor === "lightblue") {
        const usersList = lightBlueDiv.nextElementSibling.children;
        let users = "";
        for (let i = 0; i < usersList.length; i++) {
            users += usersList[i].textContent;
            if (i !== usersList.length - 1) users += " and ";
        }
        alert(`Hello ${users}`);
    }
}
alertUsers();
