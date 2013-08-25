var webSocketServer = require('websocket').server;

var http = require('http');

var server = http.createServer(function(req,res){
	res.write("Connected to Server .. redirecting");
});

server.listen(1447);

wsServer = new webSocketServer({
	httpServer: server
});


wsServer.on('request', function(request) {

	var connection = request.accept(null, request.origin);

	connection.on('message', function(message){
		console.log("message="+message);
	})

	connectin.on('close',function(connection){

	})

});

