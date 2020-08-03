import React, { Component } from 'react'
import {connect} from 'react-redux'
import {signIn} from '../../store/actions/authActions'

class SingIn extends Component {
    state={
        email:'',
        password:''
    }
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        // console.log(this.state);
        this.props.signIn(this.state);
    }
    render() {
         const {authError}=this.props;
        //  console.log(this.props)
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Singn In</h5>
                    <div className="input-field">
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="password">Password</label>
                        <input type="password" id="password" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <button className="btn pink lighten-1 z-depth-0">Login</button>
                        <div className="red-text center">
                            {authError?<p>{authError}</p>:null }
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
       console.log(state)
    return {
        authError: state.auth.authError
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        signIn: (credentials) => {
            dispatch(signIn(credentials))
        }
    }
}
export default connect(mapStateToProps,mapDispatchToProps)(SingIn)
