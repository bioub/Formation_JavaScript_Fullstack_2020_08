const http = require('http');

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({ msg: 'Hello' }));
  } else if (req.url === '/contact') {
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({ prenom: 'Romain' }));
  } else {
    res.statusCode = 404;
    res.setHeader('Content-type', 'application/json');
    res.end(JSON.stringify({ msg: 'Not Found' }));
  }
});

server.listen(3000, () => {
  console.log('Server started on port 3000');
});
