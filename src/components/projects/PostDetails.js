import React, {Component} from 'react'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'

class PostDetails extends Component{
    render(){

        const {post}=this.props;
         console.log(post)
        // const post=this.props.post?(
        //     <div className="post">
        //         <h4 className="center">{this.props.post.titulo}</h4>
        //         <p>{this.props.post.contenido}</p>
        //     </div>
        // ):(
        //     <div className="center">Cargando post...</div>
        // )

        // return (
        //     <div className="container section project-details">
        //        {post}
        //     </div>
        // )

        if(post){
            return(
                <div className="container section project-details">
                    <div className="card z-depth-0">
                        <div className="card-content">
                            <span className="card-title">
                                {post.titulo}
                            </span>
                            <p>{post.contenido}</p>
                        </div>
                        <div className="card-action gret lighten-4 grey-text">
                            <div>posted by JOSHE</div>
                        </div>
                    </div>
                </div>
            )
        }else{
            return(
                <div className="container center">
                    <p>Cargando Post....</p>
                </div>
            )
        }

    } 
}

const mapStateToProps=(state,ownProps)=>{
    const id=ownProps.match.params.id;
    // console.log(state);
    // console.log(id);
    const projects=state.firestore.data.projects;
    const project=projects ? projects[id]:null;

    return {
    //     post:state.posts.posts.find((post)=>{
    //         return post.id===id
    // })
    post:project
    }
}

export default compose(
    connect(mapStateToProps),
    firestoreConnect([
        {collection:'projects'}
    ])
) (PostDetails)

