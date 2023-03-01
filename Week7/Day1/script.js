// console.log('run nodes from a js file');
// for (var i = 0; i < 5 ; i++) {
//     console.log(i)   
// }

//module system in nodejs, exmaple
// const greeting = require('./greeting.js');
// console.log(greeting);
// greeting('John');
// const g = require('./greeting.js');
// console.log(g);


//axios exmaple
// const axios = require('axios');
// const getUsers = async() => {
//     try {
//       const response = await axios.get('https://jsonplaceholder.typicode.com/users');
//       console.log(response);
//     } catch (error) {
//       console.log(e);
//     }
//   }
//   getUsers()


//promise pending from the getuser.js
// const users = require('./modules/getusers.js')
// console.log(users.getUsers());

// const users = require('./modules/getusers');
// users.getUsers() 
// .then(data => {
//     data.forEach((item,i) => {
//         console.log(item.name) // exacute only the names of the users
//     });
// })

//exacute nodemon with npx nodemon server.js on gitbash