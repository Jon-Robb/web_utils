// express initialize app to be a function handler that you can supply to an HTTP server 
let app: any = require('express')();
let http: any = require('http').createServer(app);

// socket.io initialize by passing the http (the HTTP server) object and the cors option
let io: any = require('socket.io')(http, {
    cors: {
        origin: ["http://localhost:3001"]
    }
});

// We define a route handler / that gets called when we hit our website home.
app.get('/', (req: any, res: any) => {
    res.send("<h1>Hello socket.io</h1>");
});

// Listen on the connection/disconnection events for incoming sockets
io.on('connection', (socket: any) => {
    console.log('a user connected');
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});


// We make the http server listen on port 3000.
http.listen(3000, () => {
    console.log('listening on *:3000');
});