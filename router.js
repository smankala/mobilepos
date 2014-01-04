

function route(handle,parse,res,postdata,conn){
	if( typeof handle[parse.pathname] === "function" ){
 			console.log('found handle for'+ parse.pathname);
	 		 handle[parse.pathname](res,parse.query,postdata);
 	}
	else
	{	
		res.writeHead(200, {'Content-Type': 'text/plain'});
  		res.end('Incorrect URL found');
	}
}
exports.route = route;