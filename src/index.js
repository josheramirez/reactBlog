import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider, useSelector} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk'
import logger from 'redux-logger'

import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider,getFirebase,siLoaded} from 'react-redux-firebase';


import {createStore,applyMiddleware,compose,combineReducers} from 'redux';
import fbConfig from './config/fbConfig'
import firebase from "firebase/app";
// import 'firebase/auth'
import { isLoaded  } from 'react-redux-firebase';


// import "bootswatch/dist/superhero/bootstrap.min.css"; 
// import "bootswatch/dist/sketchy/bootstrap.min.css";

// const store=createStore(rootReducer,applyMiddleware(thunk,logger));

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div></div>;
  return children
}

const store=createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(firebase,fbConfig)
  )
)

const rrfConfig = {
  userProfile: 'users',
  useFirestoreForProfile: true
}

const rrfProps = {
  firebase,
  // config: fbConfig,
  config: rrfConfig, fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance,
};

ReactDOM.render(
  <Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}>
      <AuthIsLoaded>
        <App />
      </AuthIsLoaded>
   </ReactReduxFirebaseProvider>
  </Provider>,
      // <Provider store={store}>
      //   <React.StrictMode>
      //     <App />
      //   </React.StrictMode>
      // </Provider>,
  document.getElementById('root')
);



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
