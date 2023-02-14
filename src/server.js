'use strict';

const express = require('express');

const PORT = 8081;
const HOST = '0.0.0.0';

const app = express();

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.send('Hello World');
});

app.get('/version', (req, res) => {
  res.send('v1.0.0');
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);