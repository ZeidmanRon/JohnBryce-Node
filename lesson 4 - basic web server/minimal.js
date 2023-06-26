//open Postman and make a simple get request to localhost:8080
require('http').createServer((req, res) => {
    res.writeHead(200).end('My first minimal node web server!');
}).listen('8080', 'localhost');