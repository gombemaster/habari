var http = require('http');

server = http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.end('Hello World!');
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => console.log("Server is running on port 3000"));


