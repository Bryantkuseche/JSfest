var http = require("http");
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/html"});
	response.write("<!DOCTYPE html><html><head><title>Hello Friend</title></head><body><h2>Hello Friend</h2><p>This is a test with Node.js</p><p>This framework is better than PHP</p></body></html>");
	response.end();
}).listen(3000);
console.log(http);