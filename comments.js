// Create web server 
var express = require('express');
var app = express();

// Create a route for the home page
app.get('/', function(req, res) {
  res.send('Hello World');
});

// Start the server on port 3000
app.listen(3000, function() {
  console.log('Server is running on port 3000');
});