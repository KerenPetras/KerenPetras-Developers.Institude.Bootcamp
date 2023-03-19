const express = require('express');
const app = express();
const port = 3000;

app.use(express.static(__dirname + '/public'));

app.get('/', (req,res) => {
    console.log('getting your request...')
})

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
  });