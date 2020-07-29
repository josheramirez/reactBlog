import React, {Component} from 'react'
import {connect} from 'react-redux'


class PostDetails extends Component{

    render(){
        console.log(this.props.post)
        //  console.log(this.props.post.contenido?)
        const post=this.props.post?(
            <div className="post">
                <h4 className="center">{this.props.post.titulo}</h4>
                <p>{this.props.post.contenido}</p>
            </div>
        ):(
            <div className="center">Cargando post...</div>
        )

        return (
            <div className="container section project-details">
               {post}
            </div>
        )
    } 
}

const mapStateToProps=(state,ownProps)=>{

    let id=ownProps.match.params.id;
   
    return {
        post:state.posts.posts.find((post)=>{
            return post.id===id
        })
    }
}

export default connect(mapStateToProps)(PostDetails)

