// import React, { Component } from 'react'
// import {connect} from 'react-redux';
// import {signUpUser} from '../../store/actions/userActions'
// import LoadingSpinner from '../spinner/loadingSpinner'

// const SingUp =({isLoading,signup}) => {

//    const handleChange=(e)=>{

//     }
//     const handleSubmit=(e)=>{
//         e.preventDefault();
//         let data={email:e.target.email.value,password:e.target.password.value};
       
//         signup(data);

//     }
//         return (
//              <div className="container">
//                 {isLoading != false ? <LoadingSpinner/> :
//                  <form onSubmit={handleSubmit} className="white">
//                      <h5 className="grey-text text-darken-3">Singn In</h5>
//                      <div className="input-field">
//                          <label htmlFor="email">Email</label>
//                          <input type="email" id="email" onChange={handleChange}/>
//                      </div>
//                      <div className="input-field">
//                          <label htmlFor="password">Password</label>
//                          <input type="text" id="password" onChange={handleChange}/>
//                      </div>
//                      <div className="input-field">
//                          <button className="btn pink lighten-1 z-depth-0">Login</button>
//                      </div>
//                  </form>
//                 }
//             </div>
//         )
//     }
// const mapStateToProps=(state)=>{
//     console.log(state);
//     return {
//         isLoading: state.user.loading
//     };
// }

// const mapDispatchToProps=dispatch=>{
//     return{
//         signup: data =>dispatch(signUpUser(data))
//     };
// }
// export default connect(mapStateToProps,mapDispatchToProps)(SingUp)
