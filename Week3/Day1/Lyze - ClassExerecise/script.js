// For each of the questions, find 2 WAYS of accessing :
// 1. The div DOM node?
// 2. The ul DOM node?
// 3. The second li (with Pete)?


//FIRST 
/// first way
function changeDiv() { //enters div
let title = document.body.firstElementChild;
console.log(title);
title.textContent="Wonderful!"
//second way
//let title2 = document.body.children[0];
}
changeDiv();

//SECOND
///first way
function changeTheWholeUl() {
    let ul =  document.body.children[1];
    console.log(ul);
    ul.textContent="Meow";
///second way
//let ul2 = firstDiv.nextElementSibling;
}
changeTheWholeUl();

//THIRD
function changeUl(){
    //first way
    const title1 = document.body.firstElementChild;
    const division = title1.nextElementSibling;
    const changeTextUl = division.lastChild; // with Pete 
    //const changeTextUl = division.lastElementChild // instead of Pete 
    console.log(changeTextUl);
    changeTextUl.textContent= "Who?";
///second way
// const secondItem = ul.children[1];
}

changeUl();