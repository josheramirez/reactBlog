import React, {Component} from 'react'


class Principal extends Component{
    render(){
        // const {posts}=this.props;
        // console.log(posts)
        return (
                    <form className="card card-body">
                        <div className="form-group input-group">
                            <div className="input-group-text bg-light">
                                <i className="material-icons">sports_esports</i>
                            </div>
                            <input 
                                type="text" 
                                className="form-control"
                                placeholder="http://algo.com"
                                name="url"
                            />
                        </div>
                    </form>

        )
    }
}

export default Principal;