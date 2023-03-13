const express = require('express');
const app = express();
// const db = require('./db/db.js');
// const bodyParser = require('body-parser');

// app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static('public'));

// Route for pokedex page
app.get('/pokedex', (req, res) => {
  res.sendFile(__dirname + '/public/pokedex.html');
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });
  