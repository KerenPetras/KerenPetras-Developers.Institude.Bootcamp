// Instructions
// In todays exercise we will be creating a Mad Libs game.
// If you’ve never played this game, a mad lib is a game where you fill in a bunch of blank inputs with different word types (ie : noun, adjective, verb), and then a story is generated based on the words you chose, and sometimes the story is surprisingly funny.

// In this exercise you work with the HTML code presented below.

// Follow these steps :

// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.
// Bonus: Add a “shuffle” button to the HTML file, when clicked the button should change the story currently displayed (but keep the values entered by the user). The user could click the button at least three times and get a new story. Display the stories randomly.
// <!DOCTYPE html>
// <html>
//  <head>
//   <meta charset="utf-8" />
//   <title>Challenge: Mad Libs</title>
//  </head>
//  <body>

//     <h1>Mad Libs</h1>

//     <form id="libform">
//         <label for="noun">Noun:</label><input type="text" id="noun"><br>
//         <label for="adjective">Adjective:</label><input type="text" id="adjective"><br>
//         <label for="person">Someone's Name:</label><input type="text" id="person"><br>
//         <label for="verb">Verb:</label><input type="text" id="verb"><br>
//         <label for="place">A place:</label><input type="text" id="place"><br>
//         <button id="lib-button">Lib it!</button>
//     </form>

//     <p>Generated story: 
//     <span id="story"></span>
//     </p>

//     <script src="..."></script>

//  </body>
// </html>

// Get the form element and the story span element
const form = document.querySelector('#libform');
const storySpan = document.querySelector('#story');

// Get the input elements
const nounInput = document.querySelector('#noun');
const adjectiveInput = document.querySelector('#adjective');
const personInput = document.querySelector('#person');
const verbInput = document.querySelector('#verb');
const placeInput = document.querySelector('#place');

// Function to generate the story
function generateStory() {
  // Get the values from the inputs
  const nounValue = nounInput.value;
  const adjectiveValue = adjectiveInput.value;
  const personValue = personInput.value;
  const verbValue = verbInput.value;
  const placeValue = placeInput.value;

  // Check that all values are filled in
  if (nounValue && adjectiveValue && personValue && verbValue && placeValue) {
    // Generate the story using the input values
    const story = `${personValue} went to the ${adjectiveValue} ${nounValue} and ${verbValue} there. Afterwards, they went to ${placeValue}.`;

    // Display the story in the span element
    storySpan.textContent = story;
  } else {
    // If any values are missing, display an error message in the console
    console.error('Please fill in all values');
  }
}

// Call the generateStory function when the form is submitted
form.addEventListener('submit', function(event) {
  event.preventDefault(); // prevent the form from submitting
  generateStory();
});

// Bonus: add a shuffle button
const shuffleButton = document.createElement('button');
shuffleButton.textContent = 'Shuffle';
storySpan.after(shuffleButton);

shuffleButton.addEventListener('click', function() {
  const stories = [
    `${personInput.value} went to the ${adjectiveInput.value} ${nounInput.value} and ${verbInput.value} there. Afterwards, they went to ${placeInput.value}.`,
    `Once upon a time, there was a ${adjectiveInput.value} ${nounInput.value} named ${personInput.value}. They loved to ${verbInput.value} in ${placeInput.value}.`,
    `${personInput.value} and their friends went on a trip to ${placeInput.value}. They had to bring a lot of ${adjectiveInput.value} ${nounInput.value} for the journey. When they got there, they decided to ${verbInput.value} and have fun.`,
  ];

  // Remove the current story from the array of possible stories
  const currentStory = storySpan.textContent;
  const indexToRemove = stories.indexOf(currentStory);
  if (indexToRemove !== -1) {
    stories.splice(indexToRemove, 1);
  }

  // Pick a random story from the remaining stories
  const randomIndex = Math.floor(Math.random() * stories.length);
  const randomStory = stories[randomIndex];

  // Display the new story
  storySpan.textContent = randomStory;
});

