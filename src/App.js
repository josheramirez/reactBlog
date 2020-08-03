import React, {Component} from 'react';

import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { render } from '@testing-library/react';
import NavBar from './components/layout/NavBar'

import PostDetails from './components/projects/PostDetails'
import SignIn from './components/auth/SingIn'
import newPost from './components/post/newPost'
import createProject from './components/projects/CreateProject'
import SingUp from './components/auth/SingUp'
import Principal from './components/Principal'

class App extends Component{
  render(){
    return (
      <BrowserRouter>    
        <div className="App">
        {/* <NavBar/> */}
        <Switch>
        <Route path='/signin' component={SignIn}/>
        <Route path='/post/:id' component={PostDetails}/>
          <Route exact path='/' component={Dashboard}/>
          <Route path='/create' component={createProject}/>
          {/* <Route path='/create' component={newPost}/>
          
          <Route path='/singin' component={SingIn}/> */}
        </Switch>
       </div>
      </BrowserRouter>
        // <div className="container p-4">
        //   <div className="">
        //   {/* <Principal/> */}
        //     <SingUp/>
        //   </div>
        // </div>

    );
  }
  
}

export default App;
