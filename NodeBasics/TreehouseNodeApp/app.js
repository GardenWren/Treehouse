//Problem: a simple way to get the badge count and point info for a treehouse account
//Solution: use Node.js to connect to Treehouse's API to get info to present

var username = "gardenwren";
var profile = require("./profile.js");


var users = process.argv.slice(2);
users.forEach(profile.get);