import React, {Component} from 'react';

import './App.css';
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Dashboard from './components/dashboard/Dashboard'
import { render } from '@testing-library/react';
import NavBar from './components/layout/NavBar'

import PostDetails from './components/projects/PostDetails'
import SingIn from './components/auth/SingIn'
import newPost from './components/post/newPost'

import Principal from './components/Principal'

class App extends Component{
  render(){
    return (
      // <BrowserRouter>    
      //   <div className="App">
      //   {/* <NavBar/> */}
      //   <Switch>
      //     {/* <Route exact path='/' component={Dashboard}/>
      //     <Route path='/create' component={newPost}/>
      //     <Route path='/post/:id' component={PostDetails}/>
      //     <Route path='/singin' component={SingIn}/> */}
      //   </Switch>
      //  </div>
      // </BrowserRouter>
        <div className="container ">
          <div className="row">
            <Principal/>
          </div>
        </div>

    );
  }
  
}

export default App;
