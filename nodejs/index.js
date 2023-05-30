'use strict';

const express = require('express');

const app = express();

const host = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}`);
});