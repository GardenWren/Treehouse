
var render = require("./renderer.js");

var pageType = "text/plain"

//generates a search page
function search(request, response){
	if (response.url === "/"){
	response.writeHead(200, {'Content-type': + pageType });
	render.header();
	render.search();
	render.footer();
	response.end();
  }
};

//generates a profile page
function profile(request, response){
	var username = request.url.replace("/", "");
	if (username.length > 0) {
	response.writeHead(200, {'Content-type': + pageType });
	render.header();
	render.profile(username);
	render.footer();
	response.end();
	} 
};

//generates an error page
function  error (request, response){
    response.writeHead(200, {'Content-type': + pageType });	var error = "error";
	render.header();
	render.error(error);
	render.footer();
	response.end();
};


module.exports.search = search;//gives access to a search page
module.exports.profile = profile;//gives access to as profile page
module.exports.error = error;// gives a error message




