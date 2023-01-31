// Instructions
// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event 
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions  
const inputField = document.querySelector("#inputField");

inputField.addEventListener("input", function(e) {
  let letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let newValue = "";
  
  for (let i = 0; i < this.value.length; i++) {
    if (letters.indexOf(this.value[i]) !== -1) {
      newValue += this.value[i];
    }
  }
  
  this.value = newValue;
});
