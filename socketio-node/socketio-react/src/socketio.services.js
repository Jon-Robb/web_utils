import io from 'socket.io-client';
let socket;

// This is the client side code for socket.io
export const initiateSocketConnection = (room) => {
    socket = io(process.env.REACT_APP_SOCKET_ENDPOINT, {
        // authentication
        auth: {
            token: 'my-token'
        },
    });
    console.log('Connecting socket...');
}

export const disconnectSocket = () => {
    console.log('Disconnecting socket...');
    if(socket) socket.disconnect();
}

export const subscribeToChat = (cb) => {
    socket.emit('my message', 'Hello there from React');

        socket.on('my broadcast', (msg) => {
            return cb(null, msg);
        });
}