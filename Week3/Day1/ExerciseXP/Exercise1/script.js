// 🌟 Exercise 1 : Users
// Instructions
// <div id="container">Users:</div>
// <ul class="list">
//     <li>John</li>
//     <li>Pete</li>
// </ul>
// <ul class="list">
//     <li>David</li>
//     <li>Sarah</li>
//     <li>Dan</li>
// </ul>

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it
///PART 1
function retrieveDiv() {
    const division = document.body.children[0];
    console.log(division);
    division.textContent = "Hello Div!"
}
retrieveDiv();

// Change the name “Pete” to “Richard”.
///PART 2
function changeName() {
    const firstList = document.body.children[1];
    const secondItem = firstList.lastElementChild;
    console.log(secondItem);
    secondItem.textContent="Hey I'm Richard";
}
changeName();

// Change each first name of the two <ul>'s to your name.
///FIRST VERSION
function changeFirstItemList() {
    const firstList = document.body.children[1]; //first list changes
    const firstListItem = firstList.firstElementChild;
    const secondList = document.body.children[2]; //second list changes
    const secondListItem = secondList.firstElementChild;
    console.log(firstListItem,secondListItem);
firstListItem.textContent="Keren was here";
secondListItem.textContent="Keren was here again";
}
changeFirstItemList();

///SECOND VERSION
function changeFirstItemList() {
    const listItems = document.getElementsByClassName("list");
    for (let i = 0; i < listItems.length; i++) {
        const firstItem = listItems[i].firstElementChild;
        firstItem.textContent = "Missed me? Keren was here..";
    }
}
changeFirstItemList();

// Delete the <li> that contains the text node “Sarah”.
function deleteSarah() {
    const listSarahItem = document.body.children[2];
    console.log(listSarahItem);
    const sarahItem = listSarahItem.children[1];
    console.log(sarahItem);
    sarahItem.remove();
}
deleteSarah();

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
// Add the classes university and attendance to the first <ul>.


