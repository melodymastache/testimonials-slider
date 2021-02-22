const express = require('express');
const app = express();
const path = require('path');
const PORT = 3000;
//const $ = require('jquery');

app.use(express.static("public")); //exposing public directory to server

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/index.html'));
});

app.listen(PORT, () => {
  console.log(`VanillaJS App listening at http://localhost:${PORT}`)
});