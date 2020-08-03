import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {reduxFirestore,getFirestore,createFirestoreInstance} from 'redux-firestore';
import {ReactReduxFirebaseProvider,getFirebase} from 'react-redux-firebase';


import {createStore,applyMiddleware,compose} from 'redux';
import fbConfig from './config/fbConfig'
import firebase from "firebase/app";

// import "bootswatch/dist/superhero/bootstrap.min.css"; 
// import "bootswatch/dist/sketchy/bootstrap.min.css";

// const store=createStore(rootReducer,applyMiddleware(thunk,logger));

const store=createStore(rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
    reduxFirestore(fbConfig)
  )
);

const rrfProps = {
  firebase,
  config: fbConfig,
  dispatch: store.dispatch,
  createFirestoreInstance
};

ReactDOM.render(
  <Provider store={store}>
   <ReactReduxFirebaseProvider {...rrfProps}>
    <App />
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
