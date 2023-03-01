const https = require('http');

const server = http.createServer( (req,res) => {
    console.log('get a req from client');
    res.end('hello from my first server')
})

server.listen(5000)