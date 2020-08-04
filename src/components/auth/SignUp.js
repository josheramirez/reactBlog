import React, { Component } from 'react'
import {connect} from 'react-redux';
// import {signUpUser} from '../../store/actions/userActions'
import {signUp} from '../../store/actions/authActions'
import LoadingSpinner from '../spinner/loadingSpinner'
import { Redirect } from 'react-router-dom';

// const SingUp =({isLoading,signup}) => {
class SignUp extends Component{
    state={
        email:'',
        password:'',
        firstName:'',
        lastName:''
    }
  
    //const handleChange=(e)=>{
    handleChange=(e)=>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    //const handleSubmit=(e)=>{
    handleSubmit=(e)=>{
        e.preventDefault();
        // let data={email:e.target.email.value,password:e.target.password.value};
        // signup(data);
        this.props.signUp(this.state);
    }
    render(){
        const {auth, authError}=this.props;
        if(auth.uid) return <Redirect to="/" />
        console.log(this.props);
        return (
             <div className="container">
                {/* {isLoading != false ? <LoadingSpinner/> : */}
                 <form onSubmit={this.handleSubmit} className="white">
                     <h5 className="grey-text text-darken-3">Singn Up</h5>
                     <div className="input-field">
                         <label htmlFor="email">Email</label>
                         <input type="email" id="email" onChange={this.handleChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="password">Password</label>
                         <input type="text" id="password" onChange={this.handleChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="firstName">First Name</label>
                         <input type="text" id="firstName" onChange={this.handleChange}/>
                     </div>
                     <div className="input-field">
                         <label htmlFor="lastName">Last Name</label>
                         <input type="text" id="lastName" onChange={this.handleChange}/>
                     </div>
                     <div className="input-field">
                         <button className="btn pink lighten-1 z-depth-0">Login</button>
                         <div className="red-text center">
                            {authError?<p>{authError}</p>:null }
                        </div>
                     </div>
                 </form>
                {/* } */}
            </div>
        )
    }
    }
const mapStateToProps=(state)=>{
    // console.log(state);
    return {
        // isLoading: state.user.loading
        auth: state.firebase.auth,
        authError:state.auth.authError
    };
}

const mapDispatchToProps=dispatch=>{
    return{
        // signup: data =>dispatch(signUpUser(data))
        signUp: (newUser)=>dispatch(signUp(newUser))
    };
}
export default connect(mapStateToProps,mapDispatchToProps)(SignUp)
