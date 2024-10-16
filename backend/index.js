const express = require('express')
const http = require('http')
const cors = require('cors')
const app = express()

const { Server } = require('socket.io');

app.use(cors())

app.use(express.json());

const server = http.createServer(app)

// CORS options for Socket.io
const io = new Server(server, {
    cors: {
      origin: '*'
    }
    
  });
  

io.on('connection', (socket) => {
  console.log('socket connected on ', socket.id);
  socket.on('greeting', (msg)=>{
    socket.emit('response', 'hii from server')
  })
});

server.listen(3000, () => {
  console.log('server started...');
});
