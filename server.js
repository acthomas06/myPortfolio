var http = require('http');

const port = 8080;

function handleRequest(req, res) {
    res.end('The server works!');
}

var server = http.createServer(handleRequest);

server.listen(port, function () {
    console.log("Server listening on port ", port);
})