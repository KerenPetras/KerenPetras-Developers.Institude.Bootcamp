// 🌟 Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:

// <article>
//     <h1> Some Facts </h1>
//     <h2> The Chocolate </h2>
//     <h3> History of the chocolate </h3>
//     <p> Chocolate is made from tropical Theobroma cacao tree seeds. 
//     Its earliest use dates back to the Olmec civilization in Mesoamerica.</p>
//     <p> After the European discovery of the Americas, chocolate became 
//     very popular in the wider world, and its demand exploded. </p>
//     <p> Chocolate has since become a popular food product that millions enjoy every day, 
//     thanks to its unique, rich, and sweet taste.</p> 
//     <p> But what effect does eating chocolate have on our health?</p> 
// </article>


// Using a DOM property, retrieve the h1 and console.log it.
// PART 1.1
//const article = document.body.children[0];
//const articleTitle = article.firstElementChild;
//PART 1.2
const articleTitle = document.body.children[0].firstElementChild;
console.log(articleTitle);

// Using DOM methods, remove the last paragraph in the <article> tag.
const nolastPara = document.body.children[0].lastElementChild;
console.log(nolastPara);
nolastPara.remove();

// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.
const titleH2 = articleTitle.nextElementSibling; 
console.log(titleH2);
function changeBackground() {
    const color = document.body.style.background = "red";
}

titleH2.addEventListener("click",changeBackground);

// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const titleH3 = document.querySelector('h3');
console.log(titleH3);
function hideTile() {
    titleH3.style.display = "none";  
}

titleH3.addEventListener("click",hideTile);

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.
const btnBold = document.querySelector('#boldtext');
const allPara = document.querySelectorAll('p');

btnBold.addEventListener("click", function() {
    allPara.forEach(function(para) {
        para.style.fontWeight = 'bold';
    });
});

// BONUS : When you hover on the h1, set the font size to a random pixel size between 0 to 100.(Check out this documentation)
// BONUS : When you hover on the 2nd paragraph, it should fade out (Check out “fade css animation” on Google)


