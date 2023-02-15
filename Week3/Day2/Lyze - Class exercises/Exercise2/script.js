// Exercise 2 - using the event object
// const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Using a loop, add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the color of the button (do it directly in the JS)

//one funtion;
function changeColor(evt) {
    console.log(evt);
document.body.style.background = evt.target.value; //evt.targert.textcontent; stead textcontent 
//textcontent can change
}

const colors = ["blue","yellow","pink","purple"];

function addButtons() {
    const divContainer = document.querySelector("#container");
    for (const color of colors) {
        const button = document.createElement("button");
        const content = document.createTextNode(`Click here to change to ${color}`)
        button.setAttribute("value",color);
        button.appendChild(content)
        divContainer.appendChild(button);
    //for every button I create, I want to make it clickable
button.addEventListener("click", changeColor) 
}
}

addButtons();