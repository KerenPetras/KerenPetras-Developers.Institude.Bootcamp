// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.

// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?
// <!DOCTYPE html>
// <html>
//     <head>
//         <meta charset="utf-8">
//         <title>Challenge: Create a solar system</title>
//         <style>
//             body {
//                 background-color: black;
//                 padding: 10px;
//             }
//             .planet {
//                 width: 100px;
//                 height: 100px;
//                 border-radius: 50%;
//                 text-align: center;
//                 padding: 10px;
//                 position: relative;
//                 border: 2px solid white;
//             }
//             .moon {
//                 position: absolute;
//                 width: 30px;
//                 height: 30px;
//                 border-radius: 50%;
//                 background: rgb(237, 237, 237);
//                 border: 5px solid red;
//             }
//         </style>
//     </head>
//     <body>

//     <section class="listPlanets"></section>

//     <script src="..."></script>
//     </body>
// </html>

const planets = [  { name: "Mercury", color: "rgb(142, 142, 142)" },
  { name: "Venus", color: "rgb(255, 153, 153)" },
    { name: "Earth", color: "rgb(51, 102, 255)" },
      { name: "Mars", color: "rgb(255, 128, 0)" },
        { name: "Jupiter", color: "rgb(255, 178, 102)" },
          { name: "Saturn", color: "rgb(255, 153, 153)" },
            { name: "Uranus", color: "rgb(102, 153, 255)" }, 
             { name: "Neptune", color: "rgb(153, 153, 255)" }];

const section = document.querySelector(".listPlanets");

for (let planet of planets) {
  let div = document.createElement("div");
  div.classList.add("planet");
  div.style.backgroundColor = planet.color;
  div.innerHTML = planet.name;
  section.appendChild(div);
}
