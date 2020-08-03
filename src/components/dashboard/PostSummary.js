import React from 'react'
import {Link} from 'react-router-dom'
function PostSummary({post}) {

    return (
        <Link to={"/post/"+post.id}>
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.titulo}</span>
                <p>post.titulo</p>
                <p>21/07/2020</p>
            </div>
        </div>
        </Link>
    )
}

export default PostSummary
