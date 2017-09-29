var querystring = require("querystring"),
	url = require("url"),
	dataDir = require('./now_list.json'),
	add_success = require('./add_success.json'),
	client = require('./client.json'),
	city = require('./city.json');
	

var axios = require('axios');
var MockAdapter = require('axios-mock-adapter');

let mock = new MockAdapter(axios)

mock.onGet("/now_list").reply(200,dataDir);
mock.onGet("/add_success").reply(200,add_success);
mock.onGet("/client").reply(200,client);
mock.onPost("/verification").reply(200,{key:1234});
mock.onPost("/register").reply(200,{code:1});
mock.onPost("/signIn").reply(200,{code:1});
mock.onGet("/details").reply(200,{code:1});

mock.onPost("/address").reply(function(config){
	let ls = localStorage,
		address = [];
		if(ls.getItem("address")){
			address = [...JSON.parse(ls.getItem("address"))]
		}

	return [200,address]
})

//获取城市信息
mock.onGet("/province").reply(200,city)

//添加新地址
mock.onPost("/add_address").reply(function(config){
	let ls = localStorage,
		params = JSON.parse(config.data);

		// console.log(params)
		if(ls.getItem("address_list")){
			let list = JSON.parse(ls.getItem("address_list"));
			console.log(list[params.token])
				if(params.bg_flag && list[params.token]){
					list[params.token].forEach((val,ind) => {
						val.bg_flag = false
					})
					params.id = list[params.token].length+1;
				}else{
					params.id = 1;
					list[params.token] = []
				}

				list[params.token].push(params)
				ls.setItem("address_list",JSON.stringify(list))
		}else{
			let obj = {};
				params.id = 1;
				obj[params.token] = [params];
				ls.setItem("address_list",JSON.stringify(obj))
		}
	return [200,1]
})
//获取地址
mock.onGet("/get_address_info").reply(function(config){
	let ls = localStorage,
		params = config.token;
		// console.log(JSON.parse(ls.getItem("address_list")))
	let list = JSON.parse(ls.getItem("address_list"))[params];
		
	return [200,list]
})



// var resData = function(res,data){
// 	res.writeHead(200,{
// 		"Content-type":"application/json;charset=UTF-8",
// 		"Access-Control-Allow-Origin":"*"
// 	});
// 	res.write(JSON.stringify(data));
// 	res.end();
// }

// module.exports = [
// 	{
// 		route:"/now_list",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,dataDir)
// 		}
// 	},{
// 		route:"/add_success",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,add_success)
// 		}
// 	},{
// 		route:"/client",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,client)
// 		}
// 	},{
// 		route:"/verification",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,{key:1234})
// 		}
// 	},{
// 		route:"/register",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,{code:1})
// 		}
// 	},{
// 		route:"/signIn",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,{code:1})
// 		}
// 	},{
// 		route:"/details",
// 		handle:function(req,res,next){
// 			var id = querystring.parse(url.parse(req.url).query).id;
// 			resData(res,{code:1})
// 		}
// 	}
// ]