import React, { Component } from 'react';
import Axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

        //get user data by id on params
        
        this.state = {
            id: 0,
            username: '',
            password: '',
            passcheck: '',
            isadmin: false
        }
    }

    
    handleOnChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        })
    }

    handleOnSubmit(event) {
        event.preventDefault();

        const user = {
            id: this.state.id,
            username: this.state.username,
            password: this.state.password,
            passcheck: this.state.passcheck,
            isadmin: this.state.isadmin
        }

        Axios.put('http://localhost:5000/users/', user)
            .then( res => {console.log(res.data)})
            .catch( err => {console.log(err)});

    }

    render() {
        return (
            <div>
                <h3>Editar Usuário</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group">
                        <label>Username</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Senha</label>
                        <input type="text"
                            name="password"
                            className="form-control"
                            value={this.state.value}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                    <div className="form-group">
                        <label>Confirmar Senha</label>
                        <input type="text"
                            name="passcheck"
                            className="form-control"
                            value={this.state.passcheck}
                            onChange={this.handleOnChange} >
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>
                            <input type="checkbox"
                                name="isadmin"
                                checked={this.state.isadmin}
                                onChange={this.handleOnChange} />
                            &nbsp;Administrador
                        </label>
                    </div>
                    <div className="form-group">
                        <input type="Submit"
                            className="btn btn-primary"
                            value="Atualizar">
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}