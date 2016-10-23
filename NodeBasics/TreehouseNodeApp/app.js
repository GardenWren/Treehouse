//Problem: a simple way to get the badge count and point info for a treehouse account
//Solution: use Node.js to connect to Treehouse's API to get info to present

//contect to api url(https://teamtreehouse.com/username.json)
var https = require("https");
var http = require("http");
var username = "gardenwren";


// Print out Message
function printMessage(username, badgeCount, points){
    var message = username + " has " + badgeCount + " total badge(s) and " + points + " points in JavaScript";
    console.log(message);
    };

// Print out Error Messages
function printError(error){
  console.error(error.message);	
  }
  
//Read the data
var request = https.get("https://teamtreehouse.com/" + username + ".json", 
  function(response){
	
    //Read the data
    var body ="";
    response.on('data',function(chunk){
	  body+= chunk;
    });

    response.on("end", function(){
	  if (response.statusCode === 200 ){
	
	    //parse the data
	    try{
	      var profile = JSON.parse(body);
	    }catch(error){
          //Parse Error
	      printError(error);
	    };
	    //print the data out
        printMessage(username, profile.badges.length,      profile.points.JavaScript);
      }else{
	    printError({message: "There was and error getting the profile for " + username + ".  " +  http.STATUS_CODES[response.statusCode]})
    }
  });
});

  //Connection error
  request.on("error", printError);