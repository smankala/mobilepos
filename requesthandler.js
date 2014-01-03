/**
 * New node file
 */
 
 var dbutil = require('./db/dbutil');
 
 var neworderkey= "neworder";
 var menukey = "menuitems";
 var menuitemkey = "items";
 var completeorderdetailskey = "completeorderdetails"
  
 function Item(itemname,itemdesc,itemprice,itemimage ){
 		 this.itemname = itemname;
 		 this.itemdesc = itemdesc;
 		 this.itemprice = itemprice;
 		 this.itemimage = itemimage;
 }
 
 function showorder(res,query,postdata){
 	var dbquery = {};
	 dbutil.showorder(res,dbquery);
 }
 
 function getmenu(res,query,postdata){
 	var dbquery = {};
 	dbutil.getmenu(res,dbquery);
 }
 
function neworder(res,query,postdata){
	res.writeHead(200, {'Content-Type': 'text/plain'});
	var completeorderinfo = JSON.parse(postdata);
	var orderdetails = completeorderinfo[completeorderdetailskey];
	if(orderdetails != undefined || orderdetails != null ) 
	{
		dbutil.insertorder(orderdetails);
		console.log(orderdetails);
	}
	else
	{
			console.log("New Order: Received invalid json"+JSON.stringify(completeorderinfo));
	}
	res.end("Invalid data");
}

function insertmenuitem(res,query,postdata){
 	res.writeHead(200, {'Content-Type': 'text/plain'});
 	var menuitem = JSON.parse(postdata);
	var items = menuitem.menuitems;
	var i=0;
	for(i=0;i<items.length;i++ ){
		dbutil.insertmenu(items[i],res );
	}
	res.end();
}
 
 exports.showorder = showorder;
 exports.neworder = neworder;
 exports.getmenu = getmenu;
 exports.insertmenuitem = insertmenuitem;