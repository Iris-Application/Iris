import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import './Login.css'
import social from '../../Images/social.jpg'

const Login = () => {
    const [name, setName] = useState('')
    const [channel, setChannel] = useState('')

    return (
        <div className="login-page-container">
            <div className="login-container">
                <h1 className="heading">
                    <span className="small">Iris App</span>
                    High level communication tool</h1>

                <p>Sign in to your Iris account</p>
                <div>
                    <input type="text" placeholder="Username" className="login-input" onChange={(event) => setName(event.target.value)} />
                </div>
                <div>
                    <input type="text" placeholder="Channel Name" className="login-input" onChange={(event) => setChannel(event.target.value)} />
                </div>
                <Link onClick={event => (!name || !channel) ? event.preventDefault() : null} to={`/ChatArea?name=${name}&channel=${channel}`}>
                    <button type="submit" className="button login">Sign in</button>
                </Link>
                <p><a className="forgot">Forgot Username?</a></p>
            </div>

            <div className="signup-container">
                <h1 className="heading"><span>New here?</span>Join Iris and enjoy interacting with others</h1>
                <p>Iris works on your own servers, No data goes out.</p>
                <button type="submit" className="button signup">Click here to SignUp</button>
                <img src={social} className="login-image" />
            </div>
        </div>
    )
}

export default Login;