const { Server } = require('socket.io');

const Message = require('./models/Message');

module.exports = (server) => {
  const io = new Server(server, { cors: { origin: '*' } });

  io.on('connection', (socket) => {
    socket.on('post', (message) => {
      Message.createMessage(message)
        .then((value) => {
          io.sockets.emit('notify', { ...value, createdAt: new Date() });
        });
    });

    socket.on('disconnect', () => { });
  });

  return io;
};
