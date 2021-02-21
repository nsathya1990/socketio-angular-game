const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http, {
  cors: {
    origin: 'http://localhost:4200',
    credentials: true,
  },
  allowEIO3: true,
});

const position = {
  x: 200,
  y: 200,
};

io.on('connection', (socket) => {
  socket.emit('position', position); // send the message to only to that particular client
  socket.on('move', (data) => {
    switch (data) {
      case 'left':
        position.x -= 5;
        io.emit('position', position); // send the message to all connected clients
        break;
      case 'right':
        position.x += 5;
        io.emit('position', position);
        break;
      case 'up':
        position.y -= 5;
        io.emit('position', position);
        break;
      case 'down':
        position.y += 5;
        io.emit('position', position);
        break;
    }
  });
  socket.on('disconnect', () => {
    console.info('user disconnected');
  });
});

http.listen(3000, () => {
  console.log('listening on *:3000');
});
