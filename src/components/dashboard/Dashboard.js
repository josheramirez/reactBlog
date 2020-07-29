import React, {Component} from 'react'
import PostsList from './PostsList.js'
import Notifications from './Notifications.js'

import {connect} from 'react-redux'

class Dashboard extends Component{
    render(){
        const {posts}=this.props;
        console.log(posts)
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
    return{
        posts:state.post.posts
    }
}

export default connect(mapStateToProps)(Dashboard) 