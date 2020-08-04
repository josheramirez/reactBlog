import React from 'react'
import {Link} from 'react-router-dom'
import moment from 'moment'

function PostSummary({post}) {

    return (
        <Link to={"/post/"+post.id}>
        <div className="card z-depth-0 project-summary">
            <div className="card-content grey-text text-darken-3">
                <span className="card-title">{post.titulo}</span>
                <p>Publicado por {post.author}</p>
                <p>{moment(post.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
        </Link>
    )
}

export default PostSummary
