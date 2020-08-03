
import userReducer from './userReducer'
import authReducer from '../store/reducers/authReducer'
import postReducer from './postReducer'
import projectReducer from './projectReducer'
import {combineReducers} from 'redux'
import {firestoreReducer} from 'redux-firestore'
import {firebaseReducer} from 'react-redux-firebase'


const rootReducer=combineReducers({
    user:userReducer,
    auth:authReducer,
    project:projectReducer,
    posts:postReducer,
    firestore:firestoreReducer,
    firebase:firebaseReducer
});

export default rootReducer;