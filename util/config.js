var HOSTNAME = process.env.IP;
var PORT 	 = process.env.PORT;
var DBHOST 	 = process.env.IP;
var DBPORT 	= "27017";
var DBNAME 	 = "managemulti";
var MENUCOLLECTION = "menu";
var ORDERCOLLECTION = "order";

config 		= {};
config.host		= HOSTNAME;
config.port 	= PORT;
config.dbhost 	= DBHOST;
config.dbport 	= DBPORT;
config.db 		= DBNAME;
config.menu		= MENUCOLLECTION;
config.order	= ORDERCOLLECTION;

module.exports = config;