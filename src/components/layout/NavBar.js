import React from 'react'
import {Link} from 'react-router-dom'
import SignInLinks from './SingInLinks'
import SignOutLinks from './SingOutLinks'
import {connect} from 'react-redux'

function NavBar(props) {
    const {profile}=props;
    const links= props.auth.uid?<SignInLinks profile={profile.lastName}/>:<SignOutLinks/>
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
       auth: state.firebase.auth,
       profile: state.firebase.profile
    }
}


export default connect(mapStateToProps)(NavBar)
