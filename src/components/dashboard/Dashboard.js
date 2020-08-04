//React, Redux & Firebase App Tutorial #24 - Logging Users Out


import React, {Component} from 'react'
import PostsList from './PostsList.js'
import Notifications from './Notifications.js'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class Dashboard extends Component{
    render(){
        const {posts,auth}=this.props;
        if(!auth.uid) return <Redirect to='/signin'/>
        return (
            <div className="dashboard container">
                <div className="row">
                    <div className="col s12 m6">
                        <PostsList posts={posts}/>
                    </div>
                    <div className="col s12 m5 offset-m1">
                        <Notifications/>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps=(state)=>{
    console.log(state)
    return{
        posts:state.firestore.ordered.projects,
        auth:state.firebase.auth
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
)(Dashboard) 