var http = require('http');
var url = require('url');

function start(host,port,route,handle){
	function onRequest(req,res,conn) {
			var parse = url.parse(req.url,"true");
			var postdata = "";
			req.addListener("data",function(chunk){
				postdata += chunk;
			//	console.log("received post data"+chunk ) ;
			});
			
			req.addListener("end",function(chunk){
					route(handle,parse,res,postdata,conn);
			});
	}
	http.createServer(onRequest).listen(port,host);
	console.log('Server running at http://'+host+":"+port);
}	

exports.start = start;