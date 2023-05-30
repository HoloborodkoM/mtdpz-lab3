const http = require('http');

const host = 'localhost';
const port = 8080;

const server = http.createServer((req, res) => {
  res.end('Hello, Docker!\n');
});

server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});