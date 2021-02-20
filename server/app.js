const Express = require('express')();
const Http = require('http').Server(Express); // http is part of express
const Socketio = require('socket.io')(Http);
// socketio will do all our communication with our socket
// express will serve that web socket for us

const position = {
  x: 200,
  y: 200,
};

// The connection event is reserved event by socketio. This event is triggered every time a new socket connects to this server
// When a socket connects, we'll have information about that particular socket
// In this case, we want to share the position information with them.
Socketio.on('connection', socket => {
    socket.emit("position", position);
});

Http.listen(3000, () => {
  console.log('Listening at port 3000 ...');
});
