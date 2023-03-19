const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req,res) => {
console.log('getting your request...')
const user = {
    firstname: 'John',
    lastname: 'Doe'
}
res.json(user)
})

app.listen(port, () => {
    console.log('server is listening to requested port')
})

