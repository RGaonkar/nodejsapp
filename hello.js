var http = require('http');  //add the http module

var myServer = http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type" : "text/html"});
<<<<<<< HEAD
	response.write("<b>Hello new</b> World");
	response.end();
});

myServer.listen(80);
console.log("Go to http://localhost:80");
=======
	response.write("<b>Hello</b> World");
	response.end();
});

myServer.listen(3000);
console.log("Go to http://localhost:3000");
>>>>>>> 9823c5efd998224a6933e83ee76ccfbdf65e6a28
