const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, {'Content-Type': 'text/html'});

  res.write('<html><body><h1>This is my first response</h1></body></html>');
  res.write('<html><body><h1>This is my second response</h1></body></html>');
  res.write('<html><body><p>This is my third one</p></body></html>');

  res.end();
});

server.listen(3000, () => {
  console.log('Server running on http://localhost:3000/');
});
