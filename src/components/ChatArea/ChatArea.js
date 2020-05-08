import React, { useState, useEffect } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'

import TopBar from '../TopBar/TopBar'
import TextInput from '../TextInput/TextInput'
import AllMessages from '../AllMessages/AllMessages'
import SideBar from '../SideBar/SideBar'

import './ChatArea.css'

let socket;

const ChatArea = ({location}) => {
    const ENDPOINT = 'localhost:4000'
    const [message, setMsg] = useState('')
    const [messages, setMsgs] = useState([])
    const [users, setUsers] = useState('')
    const [channel, setChannel] = useState('')
    const [name, setName] = useState('')

    useEffect(() => {
        const { name, channel } = queryString.parse(location.search)

        socket = io(ENDPOINT)

        setName(name)
        setChannel(channel)

        socket.emit('join', { name, channel}, ()=> {
        })

        socket.on('channelData', ({users}) => {
            setUsers(users)
        })

        return () => {
            socket.emit('disconnect')
            socket.off()
        }
    }, [ENDPOINT, location.search])

    useEffect(() => {
        socket.on('message', (message) => {
            setMsgs([...messages, message])
        })
    }, [messages])

/*************************************************
 *               SEND MESSAGE
 *************************************************/
    const sendMessage = (e) => {
        e.preventDefault()

        if(message){
            socket.emit('sendMessage', message, () => setMsg(''))
        }
    }
    
    return(
        <div className="main-container">
            <div className="side-bar-Container">
                <SideBar users={users}></SideBar>
            </div>

            <div className="chat-area-container">
                <TopBar channel={channel}></TopBar>
                <AllMessages messages={messages} name={name}></AllMessages>
                <TextInput message={message} setMsg={setMsg} sendMessage={sendMessage}></TextInput>
            </div>
        </div>
    )
}

export default ChatArea;