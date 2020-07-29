import React from 'react'
import {NavLink} from 'react-router-dom'

function singInLinks() {
    return (
        <ul className="right">
            <li><NavLink to='/create'>Nuevo Post</NavLink></li>
            <li><NavLink to='/'>Log Out</NavLink></li>
            <li><NavLink to='/'>NN</NavLink></li>
        </ul>
    )
}

export default singInLinks
