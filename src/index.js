import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';


import {Provider} from 'react-redux';
import rootReducer from './reducers/rootReducer';

import thunk from 'redux-thunk'
import {reduxFirestore,getFirestore} from 'redux-firestore';
import {reactReduxFirebase,getFirebase} from 'react-redux-firebase';

import {createStore,applyMiddleware,compose} from 'redux';
import fbConfig from './config/fbConfig'
// import "bootswatch/dist/superhero/bootstrap.min.css"; 
import "bootswatch/dist/cyborg/bootstrap.min.css";
// const store=createStore(rootReducer,
//   compose(
//     applyMiddleware(thunk.withExtraArgument({getFirebase,getFirestore})),
//     reduxFirestore(fbConfig),
//     reactReduxFirebase(fbConfig)
//   )
// );

ReactDOM.render(
  // <Provider store={store}>
    // <App />
  // </Provider>,
  <React.StrictMode>
  <App />
</React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
