const users = []

/*************************************************
 *                ADD NEW USER
 *************************************************/

const addNewUser = ({ id, name, channel}) => {

    name = name.trim().toLowerCase()
    channel = channel.trim().toLowerCase()

    const existingUser = users.find((user) => user.channel === channel && user.name === name)
    if(existingUser){
        return { error : 'This username is taken! Please try a different one.'}
    }
    if(!name || !channel){
        return { error : 'Username and channel name are required!'}
    }

    const user = { id, name, channel}
    users.push(user)
    return { user }
}

/*************************************************
 *                 DELETE USER
 *************************************************/

const deleteUser = (id) => {
    const index = users.findIndex((user) => user.id === id)
    if(index !== -1){
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => users.find((user) => user.id === id)

const getUserInChannel = (channel) => users.filter((user) => user.channel === channel)

module.exports = { addNewUser, deleteUser, getUser, getUserInChannel }