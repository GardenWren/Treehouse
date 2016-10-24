var http = require("http");
var router = require("./router.js");

//create server to listen for incoming messages
var request = http.createServer(function(request, response){
	router.search(request, response);
    router.profile(request, response);
}).listen(8080, '127.0.0.1');
console.log("Server is running...")

//includes call back function to return the correct web page(see router.js