import React from 'react'

import './TextInput.css'

 const TextInput = ({ setMsg, message, sendMessage }) => (
    <form className="form">
        <input  type="text" 
                className="input"
                placeholder="Type your message here ..."
                value={message} 
                onChange={(event) => setMsg(event.target.value)}
                onKeyPress={event => event.key === 'Enter' ? sendMessage(event) : null}
        />
        <button className="send-btn" onClick={e => sendMessage(e)}>Send</button>
    </form>
)

export default TextInput;