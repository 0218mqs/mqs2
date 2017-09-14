var querystring = require("querystring"),
	url = require("url"),
	dataDir = require('./question.json');
	school_list = require('./school_list.json');
	

var resData = function(res,data){
	res.writeHead(200,{
		"Content-type":"application/json;charset=UTF-8",
		"Access-Control-Allow-Origin":"*"
	});
	res.write(JSON.stringify(data));
	res.end();
}

module.exports = [
	{
		route:"/data",
		handle:function(req,res,next){
			var id = querystring.parse(url.parse(req.url).query).id;
			resData(res,dataDir)
		}
	},{
		route:"/notice",
		handle:function(req,res,next){
			var id = querystring.parse(url.parse(req.url).query).id;
			resData(res,school_list)
		}
	}
]