import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SingInLinks'
// import SingOutLinks from './SingOutLinks'

function NavBar() {
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Logp</Link>
                <SignInLinks/>
                {/* <SingOutLinks/> */}
            </div>
        </nav>
    )
}

export default NavBar
