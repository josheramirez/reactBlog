import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SingInLinks'
import SignOutLinks from './SingOutLinks'
import {connect} from 'react-redux'

function NavBar(props) {
    const links= props.auth.uid?<SignInLinks/>:<SignOutLinks/>
    return (
        <nav className="nav-wrapper grey darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">Logp</Link>
                {links}     
            </div>
        </nav>
    )
}

const mapStateToProps = (state, ownProps) => {
    return {
       auth: state.firebase.auth
    }
}


export default connect(mapStateToProps)(NavBar)
