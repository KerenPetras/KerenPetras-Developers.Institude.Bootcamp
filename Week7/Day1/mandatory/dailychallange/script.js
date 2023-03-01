// ex 1
// import {largeNumber} from "./main.js";
// const b = 5;
// console.log(largeNumber + b);

//ex 2,3 had to remove from the jason the type line "modules"
const http = require('http');
const {largeNumber, getCurrentdate } = require ("./main");
const server = http.createServer(handleResponse);
const port = 3000;
const host = "localhost"

function handleResponse(req,res) {
    res.setHeader('content-type','text/html');
    console.log("the request we recived: ", req)
    console.log("the response that we can build ", res)
    
    //res.end("response recived");
    // res.end(`<h1>Response from server </h1>
    //     <p>the large number is ${largeNumber}</p>`);

    res.end(`<h1>Response from server </h1>
        <p>the date and the time 
        are currently ${getCurrentdate()}</p>`);
        

} 

// function connection() {
//     console.log('I am listening',port);
// }
server.listen(port,host,function() {
    console.log("server is listening to port", port)
});