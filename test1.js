

http = require('http');

server = http.createServer(function(request,response){
	response.statusCode = 200;
	response.write("Welcome to page");
	response.end();
	console.log("Started Server");
});

server.listen(4080, function(){
	console.log("Started server at post 4080");
});

http.get("http://www.google.com/index.html", function(res) {
	  console.log("Got response: " + res);

	 res.on('data',function(chunk){
		 console.log("response="+ chunk);
	 })
	
}).on('error', function(e) {
	  console.log("Got error: " + e.message);
});
