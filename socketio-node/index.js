// express initializes app to be a function handler that you can supply to an HTTP server
let app = require('express')();
let http = require('http').createServer(app);
let io = require('socket.io')(http, {
    cors: {
        origin: 'http://localhost:3001',
    }
});

// define a route handler / that gets called when we hit our website home
app.get('/', (req, res) => {
    res.send('<h1>Hello Socket IO</h1>');
});

io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});

// make the http server listen on port 3000
http.listen(3000, () => {
    console.log('listening on *:3000');
});