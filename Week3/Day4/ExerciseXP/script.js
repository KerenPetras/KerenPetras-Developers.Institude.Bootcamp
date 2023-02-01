let colors = ['red', 'darkorange', 'orange', 'yellow', 'olive', 'lightgreen', 'green', 'maroon', 'purple', 'lime', 'olive', 'yellow', 'navy', 'blue', 'teal', 'grey', 'pink', 'cyan', 'orange', 'brown', 'magenta']

let colorStorage = ''
let mouseDown = false

function divs(colors) { //color pallate
    for (let color of colors) {
        let newDiv = document.createElement('div')
        let section1 = document.getElementById('section1')
        newDiv.classList.add('color')
        section1.appendChild(newDiv)
        newDiv.style.backgroundColor = color
        newDiv.setAttribute("value", `${color}`);
        newDiv.addEventListener("click", function () {
            colorStorage = newDiv.getAttribute('value') //to call the value of the color
            console.log(colorStorage)
        });
    }
    console.log(colorStorage)
}

divs(colors)

function whiteBoard() { //drawing board
    for (let i = 0; i < 1440; i++) {
        let newDiv = document.createElement('div')
        let section2 = document.getElementById('section2')
        newDiv.classList.add('board')
        section2.appendChild(newDiv)

        newDiv.addEventListener('click', addColour)
        newDiv.addEventListener('mousedown', addColourMouseDown)
        newDiv.addEventListener('mouseover', addColourMouseOver)
        newDiv.addEventListener('mouseup', () => {
            mouseDown = false
        })

        function addColour(evt) {
            evt.target.style.backgroundColor = colorStorage;
        }

        function addColourMouseDown(evt) {
            mouseDown = true
            if (evt.type === 'mousedown') evt.target.style.backgroundColor = colorStorage;
        }

        function addColourMouseOver(evt) {
            if (colorStorage !== '' && mouseDown) evt.target.style.backgroundColor = colorStorage;
        }
    }
}
whiteBoard()

let btn = document.querySelector('button') //earsing the colors 
btn.addEventListener('click', () => { for ( let div of document.querySelectorAll('.board')) { div.style.backgroundColor = 'white'}})