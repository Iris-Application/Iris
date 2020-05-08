import React from 'react'

import { BrowserRouter as Router, Route } from "react-router-dom"

import Login from './components/Login/Login'
import ChatArea from './components/ChatArea/ChatArea'

const App = () => {
    return(
    <Router>
        <Route path="/" exact component={Login}></Route>
        <Route path="/ChatArea" component={ChatArea}></Route>
    </Router>
    )
}

export default App;