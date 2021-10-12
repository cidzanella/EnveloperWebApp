import React, { Component } from 'react';
import Axios from 'axios';

export default class EditUser extends Component {

    constructor(props) {
        super(props);

        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);

        this.state = {
            id: 0,
            username: '',
            password: '',
            passcheck: '',
            isadmin: false
        }
    }

    componentDidMount() {
        // const {match: {params}} = this.props;
        const userId = this.props.match.params.id;
        Axios.get("http://localhost:5000/api/users/" + userId)
            .then(response => {
                if (response.data != null) {
                    this.setState({
                        id: response.data._id,
                        username: response.data.username,
                        password: response.data.password,
                        passcheck: response.data.passcheck,
                        isadmin: response.data.isadmin
                    })
                };
            });                        
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

        // update user
        Axios.put('http://localhost:5000/api/users/'+user.id, user)
            .then( res => {console.log(res.data)})
            .catch( err => {console.log(err)});

        // if want to redirect to users list (mas não está atualizando)
        window.location = '/user';
    }

    render() {
        return (
            <div>
                <h3>Editar Usuário</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group col-md-6">
                        <label>ID</label>
                        <input type="text" 
                            readOnly
                            className="form-control"
                            name="id"
                            value={this.state.id}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Username</label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Senha</label>
                        <input type="text"
                            name="password"
                            minLength="6"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                    <div className="form-group col-md-6">
                        <label>Confirmar Senha</label>
                        <input type="text"
                            name="passcheck"
                            minLength="6"
                            className="form-control"
                            value={this.state.passcheck}
                            onChange={this.handleOnChange}>
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
                        <input type="submit"
                            className="btn btn-primary"
                            value="Atualizar">
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}