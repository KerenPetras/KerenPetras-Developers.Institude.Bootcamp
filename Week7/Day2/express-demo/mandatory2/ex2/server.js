// Exercise 2 : Express & Parameters
// Instructions
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id. Check out the lesson named Express Routes & Queries in the Course Notes.
// The handler function of the route should respond with the value of the route parameter. Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object

const express = require('express');
const app = express();
const port = 3000;

// app.get('/', (req,res) => {
//     console.log('getting your request...')
// }) *If you don't need to send any response in that route, you can simply remove it

app.get('/:id', (req,res) => {
    const id = req.params.id;
    const respond = {id:id};
    res.json(respond);
})

app.listen(port, () => {
    console.log('listening to port 3000')
})

