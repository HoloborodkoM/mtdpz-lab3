'use strict';

const express = require('express');

const app = express();

const host = 'localhost';
const port = 8080;

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`Server running on http://${host}:${port}`);
});