const express = require('express');
const app = express();
const { join } = require('path');

app.get('/', function(req, res) {
  res.sendFile(join(__dirname + '/index.html'));
});

app.listen(8080);
