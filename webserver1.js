var http = require("http");
var fs = require('fs');
var port = 8080;
var serverUrl = "127.0.0.1";
//var counter = 0;

var server = http.createServer(function(req, res) {

  //counter++;
  
  if(req.url == "/view.html") {

    fs.readFile("view.html", function(err, text) {
    	var snoowrap = require('snoowrap');
      	res.setHeader("Content-Type", "text/html");
      	res.end(text);
    });
    return;
    res.setHeader("Content-Type", "text/html");
    res.end("<p>DONE</p>");
  }

  res.setHeader("Content-Type", "text/html");
  res.end();
  res.end("<p>Maybe you should try /view.html.</p>");

});

//console.log("Starting web server at " + serverUrl + ":" + port);
server.listen(port, serverUrl);