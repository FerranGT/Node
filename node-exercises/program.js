var http = require('http');

var server = http.createServer(function(req, res) {
	res.write("Success, i'm listening from port: 3000");
	res.end();
});
server.on('clientError', function(err, socket) {
	socket.end('HTTP/1.1 400 Bad Request\r\n\r\n');
});
server.listen(3000);