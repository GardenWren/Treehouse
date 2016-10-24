function header(){
	response.write('header');
};

function footer(){
	response.write('footer');
};

function search(){
	response.write('search');
};

function profile(username){
	response.write(username);
	
};

function error(error){
	response.write(error);
};




module.exports.header = header
module.exports.footer = footer
module.exports.search = search
module.exports.profile = profile
module.exports.error = error