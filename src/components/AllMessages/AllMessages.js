import React from 'react'

import ScrollToBottom from 'react-scroll-to-bottom'

import SingleMessage from './SingleMessage/SingleMessage'

import './AllMessages.css'

 const AllMessages = ({ messages, name }) =>  (
    <ScrollToBottom className="msgs">
        {messages.map((message, i) => 
        <div key={i}>
            <SingleMessage message={message} name={name}></SingleMessage>
        </div>)}
    </ScrollToBottom>
)

export default AllMessages