const http = require('http');

const server = http.createServer((req,res) => {
//     console.log('get a req from client');
//     console.log(req.headers);
//     console.log(req.url);
// res.end(' hello from my first server')

console.log(req.method);

//creating a server just with http
if (req.url == '/') {
    res.end('Home')
}
else if(req.url == '/about'){
    res.end('About')
}
else{
    res.end('page not found')
}
})

server.listen(5000, () => {
    console.log('listen to port 5000')
}); //deciding the server


//first you make a request in the gitbash line 4 
/// then you exacute node server.js
/// after reciving the console log, you need to add an respons
//// to excute it you need to run again in the gitbash 'node server.js'
