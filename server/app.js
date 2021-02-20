const Express = require('express')();
const Http = require('http').Server(Express); // http is part of express
const Socketio = require('socket.io')(Http);
// socketio will do all our communication with our socket
// express will serve that web socket for us

Http.listen(3000, () => {
  console.log('Listening at port 3000 ...');
});
