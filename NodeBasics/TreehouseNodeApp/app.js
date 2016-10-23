//Problem: a simple way to get the badge count and point info for a treehouse account
//Solution: use Node.js to connect to Treehouse's API to get info to present

//contect to api url(https://teamtreehouse.com/username.json)
var https = require("https");
var username = "gardenwren";

function printMessage(username, badgeCount, points){
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
    };

//Read the data
var request = https.get("https://teamtreehouse.com/" + username + ".json", function(response){
	
//Read the data
var body ="";
    response.on('data',function(chunk){
	body+= chunk;
    });

response.on("end", function(){
	//parse the data
	var profile = JSON.parse(body);
	//print the data out
    printMessage(username, profile.badges.length,      profile.points.JavaScript);
});


  
  });
  request.on("error",function(error){
  consol.error(error.message);	
  });