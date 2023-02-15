// Exercise 1 - basic addEventListener
// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue

const bt1 = document.querySelector("#btn");
const bt2 = document.querySelector("#btn2");

bt1.addEventListener("click",changeColor);
bt2.addEventListener("click", changeColor2);

function changeColor() {
    document.body.style.background = "red";
}

function changeColor2() {
    document.body.style.background = "blue"
}

//one funtion;
//funtion changeColor(evt) {
    //console.log(evt);
//document.body.style.background = evt.targert.textcontent; //.value instead textcontent 
//textcontent can change
//}

