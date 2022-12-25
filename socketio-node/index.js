// This is the server side code for socket.io

// express initializes app to be a function handler that you can supply to an HTTP server
let app = require('express')();
// create a server object:
let http = require('http').createServer(app);
// initialize the socket.io library and store it in the variable io
let io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3001',
    }
});

// define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
    res.send('<h1>Hello Socket IO</h1>');
});

// on connection event 
io.on('connection', (socket) => {

    // this will be the token sent from the client side
    let token = socket.handshake.auth.token;

    socket.on('my message', (msg) => {
        io.emit('my broadcast', `server: ${msg}`);
    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });

    console.log('a user connected');
});


// make the http server listen on port 3000
http.listen(3000, () => {
    console.log('listening on *:3000');
});