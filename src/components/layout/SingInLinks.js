import React, { Profiler } from 'react'
import {NavLink} from 'react-router-dom'
import {connect} from 'react-redux'
import {signOut} from '../../store/actions/authActions'

function singInLinks(props) {
    console.log(props);
    const name=props.profile?props.profile.toUpperCase():null;
    return (
        <ul className="right">
            <li><NavLink to='/create'>Nuevo Post</NavLink></li>
            <li><a onClick={props.signOut}>Log Out</a></li>
        <li><NavLink to='/'>{name}</NavLink></li>
        </ul>
    )
}
const mapDispatchToProps = (dispatch) =>{
    return {
        signOut:()=> {dispatch(signOut())}
    } 
 };
export default connect(null, mapDispatchToProps)(singInLinks)
