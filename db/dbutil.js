var mongode = require('mongode');
var assert = require('assert');
var settings = require('../util/config');
var connString =  "mongodb://srmankala:Santhosh12@ds061298.mongolab.com:61298/managemulti";

function insertorder(order){
	console.log("inserting order"+order);
	 var conn = mongode.connect(connString);
	//var conn = mongode.connect('mongodb://'+config.dbhost+':'+config.dbport+'/'+config.db);
	var collection = conn.collection(config.order);
	collection.insert(order, {safe:true}, function(err, objects) {
 		 	if (err) console.warn(err.message);
	});
}

function insertmenu(item,res){
	console.log("inserting item"+item);
	var conn = mongode.connect(connString);
	//var conn = mongode.connect('mongodb://'+config.dbhost+':'+config.dbport+'/'+config.db);
	var collection = conn.collection(config.menu);
	var response ={}; 
	collection.insert(item, {safe:true}, function(err, objects) {
 		 	if (err) {
 		 		console.warn(err.message);
 		 		response.status=1;
 		 	}
 		 	else
 		 	{
 		 		response.status=0;
 		 	}
 		
 		var responseStr = JSON.stringify(response); 	
 		res.writeHead(200, {'Content-Type': 'text/plain'});
 		res.write(responseStr);
  		res.end();
	});
}

function getmenu(res,query){
    var conn = mongode.connect(connString);
	//var conn = mongode.connect('mongodb://'+config.dbhost+':'+config.dbport+'/'+config.db);
	var collection = conn.collection(config.menu);
	collection.find(query,{_id:0}).toArray(function(err,results){
			if(err){ 
			console.warn(err.message);
					results = [];
				  	
	 		}
	 	var finalresults ={};
	 	finalresults.menuitems = results;
	 	var resultStr = JSON.stringify(finalresults);
 		res.writeHead(200, {'Content-Type': 'text/plain'});
 		res.write(resultStr);
  		res.end();
	});
}

function showorder(res,query){
    var conn = mongode.connect(connString);
	//var conn = mongode.connect('mongodb://'+config.dbhost+':'+config.dbport+'/'+config.db);
	var collection = conn.collection(config.order);
	collection.find(query).toArray(function(err,results){
			if(err){ 
					results = [];
			}
	 		var resultStr = JSON.stringify(results);
 			res.writeHead(200, {'Content-Type': 'text/plain'});
 			res.write(resultStr);
  			res.end();
	});
}




exports.insertmenu = insertmenu;
exports.getmenu = getmenu;
exports.insertorder = insertorder;
exports.showorder = showorder;