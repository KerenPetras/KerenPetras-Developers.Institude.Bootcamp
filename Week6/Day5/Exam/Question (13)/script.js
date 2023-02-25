// 13. DOM exercise

//       1. Part I : Create a button in your HTML page, when the user will click the the button a paragraph will be added on the DOM.
//                 * If the number of paragraph added is a multiple of 3, the content of the paragraph is "Hello"
//                 * else the content of the paragraph is "New Paragraph" --> MANDATORY  : use ternary operator
//                     * Example: if the paragraph is the 3rd one added, the content should be "Hello"
//         --> MANDATORY : Use arrow functions.
//       2. Part II : Add to each new paragraph, an event listener of mouse over. When you hover on a paragraph, the paragraph should become red (ie. color of the                        text).

const addParagraphButton = document.getElementById("add-paragraph");
const container = document.body;
let count = 0;

const addParagraph = () => {
  count++;
  const newParagraph = document.createElement("p");
  newParagraph.textContent = count % 3 === 0 ? "Hello" : "New Paragraph";
  container.appendChild(newParagraph);
  newParagraph.addEventListener("mouseover", () => {
    newParagraph.style.color = "red";
  });
};

addParagraphButton.addEventListener("click", addParagraph);

///We have a button with an id of add-paragraph, which is selected using document.getElementById(). We also have a count variable that will keep track of the number of paragraphs added.