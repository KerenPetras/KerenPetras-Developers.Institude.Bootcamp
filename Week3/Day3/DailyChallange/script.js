// Instructions
// Daily Challenge : Show Only The Letters
// Create an input type text that takes/shows only letters. (ie. numbers and special characters won’t be accepted)

// Hint: use one of the following events to remove any character that is not a letter

// keyup event 
// or keypress event
// or keydown event
// or input event

// Hint : Check out keycodes in Javascript or Regular Expressions  
  let input = document.getElementById("lettersOnly");
  input.addEventListener("input", function() {
    this.value = this.value.replace(/[^a-zA-Z]+/g, "");
  });
