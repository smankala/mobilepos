/**
 * New node file
 */

var mongodb = require('/Users/anushamankala/node-mongodb-native-master/lib/mongodb');
 var Db = mongodb.Db,
    MongoClient = mongodb.MongoClient,
    Server = mongodb.Server,
    ReplSetServers = mongodb.ReplSetServers,
    ObjectID = mongodb.ObjectID,
    Binary = mongodb.Binary,
    GridStore = mongodb.GridStore,
    Code = mongodb.Code,
    BSON = mongodb.pure().BSON,
    assert = require('assert');
    

var db = new Db('test', new Server("127.0.0.1", 27017,
  {auto_reconnect: false, poolSize: 4}), {w:0, native_parser: false});

// Establish connection to db
db.open(function(err, db) {

	var collection = db.collection("test");
  // Create a collection we want to drop later
  collection.find().each(function(err, doc) {
          if(doc != null) console.log("Doc from Each ");
          console.dir(doc);
    });
        
       
  });
