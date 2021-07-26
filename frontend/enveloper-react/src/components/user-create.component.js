import React, {Component} from 'react';
import Axios from 'axios';

export default class CreateUser extends Component {

    constructor(props){
        super(props);
        
        this.handleOnChange = this.handleOnChange.bind(this);

        this.handleOnSubmit = this.handleOnSubmit.bind(this);

        this.state = {
            username: '',
            password: '',
            passcheck: '',
            isadmin: false
        };
    }

    // Events handling for checkbox and input text number 
    handleOnChange(event){
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    // Events handling for submit button
    handleOnSubmit(e){
        e.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password,
            passcheck: this.state.passcheck,
            isadmin: this.state.isadmin
        };

        // http call to backend api
        Axios.post('http://localhost:5000/users/add', user)
            .then(res => console.log(res.data));

        // later will be replaced by backend method call
        console.log(user);

        // if want to redirect to users list
        window.location = '/';

        // // if want to keep in same page to enter multiples users, reset state
        // this.setState({
        //     username: '',
        //     password: '',
        //     passcheck: ''
        // });
    }
 
    render() {
        return (
            <div>
                <h3>Novo Usuário</h3>
                <form onSubmit={this.handleOnSubmit}>
                    <div className="form-group col-md-6">
                        <label>Username </label>
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
                            value="Registrar"
                            className="btn btn-primary">
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}