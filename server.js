// load express and import moduels
const path = require('path');
const express = require('express');
require('dotenv').config();

const app = express();

// using this method to serve a static website
app.use(express.static(path.join(__dirname, 'public')));

// if error occur, they will see this line
app.use(function(req, res, next) {
  res.status(404);
  res.send('404: File Not Found');
});

// port: 8080
const PORT = process.env.PORT || 8080;

// listen this port: 8080
app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});