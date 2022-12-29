// express initialize app to be a function handler that you can supply to an HTTP server
const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
// socket.io initialize a new instance of socket.io by passing the http (the HTTP server) object
const { Server } = require("socket.io");
const io = new Server(server);

// we define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
    });
});




// we make the http server listen on port 3000
server.listen(3000, () => {
    console.log('listening on port 3000');
});