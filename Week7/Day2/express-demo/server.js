const express = require('express');
const {products} = require('./database/products.js');
const app = express();

app.listen(5000, () => {
    console.log('server is listening to port 5000');
});

console.log(products);


// app.use('/',express.static(__dirname+'/public'))

// //get
// app.get('/api/products', (req, res) => {
// // res.json(products)
// })
// // 