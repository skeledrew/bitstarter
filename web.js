var express = require('express');
var fs = require('fs');  // add filesystem functionality

var app = express.createServer(express.logger());
var index = fs.readFileSync( "index.html" )  // get text from index file
var buffer = new Buffer(index) // hold text

console.log(buffer.toString())

/*app.get('/', function(request, response) {
  response.send( Buffer.toString(buffer));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});*/
