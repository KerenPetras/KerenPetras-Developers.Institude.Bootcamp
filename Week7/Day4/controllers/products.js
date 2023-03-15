const { modules } = require('modules');
const {getAllProducts} = require ('../modules/products.js');

//read - get method - all products
const _getAllProducts = (req,res) => {
    getAllProducts()
    .then(data => {
        res.json(data)
    })
    .catch (err => {
        console.log(err)
    })
}

modules.export = {
    _getAllProducts
}
