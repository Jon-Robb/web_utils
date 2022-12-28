// express initialize app to be a function handler that you can supply to an HTTP server
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);

// we define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

// we make the http server listen on port 3000
server.listen(3000, () => {
    console.log('listening on port 3000');
});