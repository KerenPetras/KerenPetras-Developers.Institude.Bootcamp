// Exercise1:
// Create a program using XMLHTTPREQUEST to receive data from the below API and append it to the DOM.
// Use the events onload, onprogress,onerror
// http://universities.hipolabs.com/search?country=Israel

//GET REQUEST
let xhr = new XMLHttpRequest();
//SOURCE
xhr.open("GET", "http://universities.hipolabs.com/search?country=Israel")

xhr.send();

xhr.onload = function() {
console.log(xhr);
if (xhr.status !== 200) {
    console.log("error")
} else {
    const data = JSON.parse(xhr.response);
    displayCollages(date)
}
}

function displayCollages(allstudies) {
    const section = document.getElementById("container")
allstudies.forEach(elem => {
      const card = document.createElement("div");
      const name = document.createElement("p");
      const textName = 
});
}