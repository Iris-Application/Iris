const socketio = require('socket.io')
const cors = require('cors');
const express = require('express')
const http = require('http')

const { addNewUser, deleteUser, getUser, getUserInChannel } = require('./user')

const PORT = process.env.PORT || 4000

const router = require('./router')
const app = express()
const server = http.createServer(app)
const io = socketio(server)

io.on('connection', (socket) => {
    socket.on('join', ({ name, channel}, callback) => {
        const { error, user} = addNewUser({id: socket.id, name, channel})

        if(error) return callback(error)

    /*************************************************
     *  MESSAGE FOR THE USERS THAT LOGGED IN
     *************************************************/

        socket.emit('message', {user: 'Iris-Bot', text: ` Welcome to the ${user.channel} channel ${user.name}!`})
        socket.broadcast.to(user.channel).emit('message', {user: 'Iris-Bot', text: `${user.name} has joined the channel`})

        socket.join(user.channel)

        io.to(user.channel).emit('channelData', { channel: user.channel, users: getUserInChannel(user.channel) })

        callback()
    })

    socket.on('sendMessage', (message, callback) => {
        const user = getUser(socket.id)
        io.to(user.channel).emit('message', { user: user.name, text: message})
        io.to(user.channel).emit('channelData', { channel: user.channel, users: getUserInChannel(user.channel) })
        callback()
    })

    /*************************************************
     *   SHOWING MESSAGE AFTER A USER LOGS OUT
     *************************************************/

    socket.on('disconnect', () => {
        const user = deleteUser(socket.id)

        if(user){
            io.to(user.channel).emit('message', { user: 'Iris-Bot', text: `${user.name} has left the channel`})
        }
    })
})

app.use(cors())
app.use(router)

server.listen(PORT, () => console.log(`The server is running on port ${PORT}`))