var http = require('http');  //add the http module

var myServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
	response.write("<b>Hello new</b> World");
	response.end();
});

myServer.listen(80);
console.log("Go to http://localhost:3000");