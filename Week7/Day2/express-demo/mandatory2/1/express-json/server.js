const express = require('express');
const app = express();

const user = {
  firstname: 'John',
  lastname: 'Doe'
};

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.get('/user', (req, res) => {
  res.json(user);
});

app.use(express.static('public'));

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
console.log(user)