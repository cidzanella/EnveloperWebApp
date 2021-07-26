import React, {Component, component} from 'react';
import Axios from 'axios';

export default class LoginUser extends Component {

    constructor(props){
        super(props);

        // events handlers
        this.handleOnChange = this.handleOnChange.bind(this);
        this.handleOnSubmit = this.handleOnSubmit.bind(this);
        
        // page state
        this.state = {
            username: '',
            password: ''
        };
    }

    // generic event handler for checkbox and inputbox
    handleOnChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleOnSubmit(event){
        event.preventDefault();

        const user = {
            username: this.state.username,
            password: this.state.password
        }

        Axios.post('http://localhost:5000/login', user)
            .then(res => console.log(res.data))
            .catch(err => console.log(err));
            
        // based on the answer redirect to the right page
        // login again
        // error msg
        // app page
        // admin privileges
    }

    render() {
        return (
            <div>
                <h3>Acessar</h3>
                <form onSubmit={this.onSubmit}>
                    {/* Username */}
                    <div className="form-group col-md-6">
                        <label for="username" 
                            className="form-control"> Usuário
                        </label>
                        <input type="text"
                            name="username"
                            className="form-control"
                            value={this.state.username}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                    {/* Password */}
                    <div className="form-group col-md-6">
                        <label for="password" 
                            className="form-control">Senha
                        </label>
                        <input type="text"
                            name="password"
                            className="form-control"
                            value={this.state.password}
                            onChange={this.handleOnChange}>
                        </input>
                    </div>
                </form>
            </div>
        )
    }
}