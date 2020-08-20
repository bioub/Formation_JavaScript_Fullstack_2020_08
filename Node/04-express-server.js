const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/hello/:name', (req, res) => {
  res.json({ msg: `Hello ${req.params.name}` });
});

app.all('/contact', (req, res) => {
  res.json({ prenom: 'Romain' });
});


// const server = http.createServer((req, res) => {
//   if (req.url === '/') {
//     res.setHeader('Content-type', 'application/json');
//     res.end(JSON.stringify({ msg: 'Hello' }));
//   } else if (req.url === '/contact') {
//     res.setHeader('Content-type', 'application/json');
//     res.end(JSON.stringify({ prenom: 'Romain' }));
//   } else {
//     res.statusCode = 404;
//     res.setHeader('Content-type', 'application/json');
//     res.end(JSON.stringify({ msg: 'Not Found' }));
//   }
// });

app.listen(3000, () => {
  console.log('Server started on port 3000');
});
