const express = require('express');
const app = express();

app.get('/:id', (req, res) => {
  const id = req.params.id;
  const data = {
    id: id,
    message: 'You have accessed route with id: ' + id
  };
  console.log('Response:', data);
  res.json(data);
});

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});

