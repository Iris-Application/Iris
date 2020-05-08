import React from 'react'

import './SideBar.css'
import appLogo from '../../Images/logo.png'

const SideBar = ({ users }) => (

            <div className="SideBar">
                <div>
                    <img src={appLogo} className="logo" />  
                </div>
                {
                    users
                        ? (
                            <div>
                                <h2><i className="fas fa-user"></i> Online Users</h2>
                                <div className="side-bar-ontainer">
                                    {users.map(({ name }) => (
                                        <div key={name} className="sidebar-item">
                                            <i className="fas fa-circle online-icon"></i>
                                            {name}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )
                        : null
                }
            </div>
    )

export default SideBar