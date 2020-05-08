import React from 'react'

import  ReactEmoji  from 'react-emoji'

import './SingleMessage.css'

 const SingleMessage = ({ message: { text, user }, name }) => {
     let SentByUser = false

     const trimmedName = name.trim().toLowerCase()

     if(user === trimmedName){
        SentByUser = true
     }
    return (
        SentByUser 
        ?(
            <div className="text-container">
                <p className="sent-text">{trimmedName}</p>
                <div className="text-box background-pink">
                 <p className="text">{ReactEmoji.emojify(text)}</p>
                </div>
            </div>
        )
        :(
            <div className="text-container">
                <p className="sent-text">{user}</p>
                <div className="text-box background-light">
                  <p className="text">{ReactEmoji.emojify(text)}</p>
                </div>

            </div>
        )
    )
}

export default SingleMessage