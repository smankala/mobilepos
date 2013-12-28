/**
 * New node file
 */
 
var server = require("./serverutil");
var router = require("./router");
var requesthandler =require("./requesthandler");
var config = require("./util/config");

var handle = {}
handle["/showorder"] = requesthandler.showorder;
handle["/neworder"] = requesthandler.neworder;
handle["/getmenu"] = requesthandler.getmenu;
handle["/insertmenuitem"] = requesthandler.insertmenuitem;

server.start(config.host,config.port,router.route,handle);

