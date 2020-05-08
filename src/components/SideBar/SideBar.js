import React from 'react'

import './SideBar.css'

const SideBar = ({ users }) => (

            <div className="SideBar">
                <div>
                    <h1>Iris App</h1> 
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