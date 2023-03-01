const http = require('http');

const user = {
  firstname: 'John',
  lastname: 'Doe'
};

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'application/json'});
  res.write(JSON.stringify(user));
  res.end();
});

server.listen(8080, () => {
  console.log('Server running on http://localhost:8080/');
});