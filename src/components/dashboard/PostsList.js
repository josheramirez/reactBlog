import React from 'react'
import PostSummary from './PostSummary'
import {Link} from 'react-router-dom'

const PostsList=({posts})=>{
    return(
        <div className="project-list section">
            {posts && posts.map(post=>{
                return(


    <PostSummary post={post} key={post.id}/>

                )
            })}
        </div>
    )
}
export default PostsList