import React, { Component } from 'react'

export class newPost extends Component {
    state={
        titulo:'',
        contenido:''
    }
    handleChange=(e)=>{
        // console.log(e.target.id);

        this.setState({
            [e.target.id]:e.target.value
        })
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        console.log(this.state);
    }
    render() {
        return (
            <div className="container">
                <form onSubmit={this.handleSubmit} className="white">
                    <h5 className="grey-text text-darken-3">Crear nuevo Post</h5>
                    <div className="input-field">
                        <label htmlFor="titulo">Titulo</label>
                        <input type="text" id="titulo" onChange={this.handleChange}/>
                    </div>
                    <div className="input-field">
                        <label htmlFor="contenido">Contenido</label>
                        <textarea className="materialize-textarea" id="contenido" onChange={this.handleChange}  cols="30" rows="10"></textarea>
                    </div>
                    <div className="input-field">
                    <button className="btn pink lighten-1 z-depth-0">Guardar</button>
                    </div>
                </form>
            </div>
        )
    }
}

export default newPost

