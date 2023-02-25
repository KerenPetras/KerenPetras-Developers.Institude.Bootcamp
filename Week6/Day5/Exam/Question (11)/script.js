// #### DOM

// 11. Which of the following events will you add in the `addEventListener()`method? 
//       ☐ click
//       ☐ onclick

// // The correct event to add in the addEventListener() method is click.
//  The click event should be used with the 
//  addEventListener() method to attach event listeners to elements.

const button = document.getElementById('my-button');
      
button.addEventListener('click', function() {
  console.log('Button clicked!');
});
