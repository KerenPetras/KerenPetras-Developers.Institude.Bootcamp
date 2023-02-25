// 12. Does the `addEventListener()` method allow you to add many events to the same element?

//     ```javascript
//     x.addEventListener("mouseover", func1);
//     x.addEventListener("click", func2);
//     x.addEventListener("mouseout", func3);`
//     ```

// Yes, the addEventListener() method allows you to add many events to the same element.

const myDiv = document.getElementById("myDiv");

// Mouseover event listener
myDiv.addEventListener("mouseover", function() {
  myDiv.style.backgroundColor = "blue";
});

// Mouseout event listener
myDiv.addEventListener("mouseout", function() {
  myDiv.style.backgroundColor = "red";
});
