/**
 * New node file
 */

var mjs = require("mongojs");
 var databaseUrl = "test"; // "username:password@example.com/mydb"
var collections = ["test","best"];
var db = mjs.connect(databaseUrl, collections);

/*
db.test.save({email: "srirangan@gmail.com", password: "iLoveMongo", sex: "male"}, function(err, saved) {
  if( err || !saved ) console.log("User not saved");
  else console.log("User saved");
});
*/

db.test.find({}, function(err, users) {
		if( err) 
			throw err;
		else{
		console.dir(users);
			console.log("hello"+users.length);
		}
		
});


