import React from 'react'
import {NavLink} from 'react-router-dom'


function signOutLinks(props) {
    return (
        <ul className="right">
            <li><NavLink to='/signin'>Sign In</NavLink></li>
            <li><NavLink to='/'>NN</NavLink></li>
        </ul>
    )
}


export default signOutLinks
