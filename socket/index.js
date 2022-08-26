const io = require('socket.io')(8900, {
  cors: {
    orgin: 'http://localhost:3000',
  },
})

let users = []
const addUser = (userId, socketId) => {
  !users.some((user) => user.userId === userId) &&
    users.push({ userId, socketId })
}
const removeUser = (socketId) => {
  users = users.filter((user) => user?.socketId != socketId)
}

const getUser = (userId) => {
  return users.find((user => user.userId === userId))
}
// when-connect
io.on('connection', (socket) => {
  console.log('a user connected')
  //   take userId and socketId from user

  socket.on('addUser', (userId) => {
    addUser(userId, socket.id)
    io.emit('getUsers', users)
  })

  // sent and get message
  socket.on('sendMessage', ({ senderId, reciverId, text }) => {
    const user = getUser(reciverId)
    io.to(user?.socketId).emit('getMessage', {
      senderId,
      text,
    })
  })

  // when-disconnect
  socket.on('disconnect', () => {
    console.log('a user disconnected!')
    removeUser(socket.id)
  })
})
