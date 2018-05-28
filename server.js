var http = require('http');
const port = 9000;

const requestHandler = (req, res) => {
	res.writeHead(200, {'Content-Type': 'text/plain'});
	console.log(req.url);
	res.write('I change my word in real time\n');
	res.write('Hello from server\n');
	res.end('okay');
}

const server = http.createServer(requestHandler);

server.listen(port, (err) => {
	if (err) {
		return(console.log('something bad happend',err));
	}
	console.log('server is listening on port',port);
})