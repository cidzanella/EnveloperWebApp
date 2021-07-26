import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Axios from 'axios';

// functional react component: all it does it accept props and return jsx
// lack of state and lifecicle methods (dont have this.state or componentDidMount)
const UserRow = props => (
    <tr>
        <td>{props.user.username}</td>
        <td>{props.user.isadmin ? "Adm" : "Std"}</td>
        <td>
            <Link to={"/user/edit/" + props.user._id}>edit</Link> | <a href="#" onClick={() => { props.deleteUser(props.user._id) }}>delete</a>
        </td>
    </tr>
)

// class component
// user list with edit, delete option
export default class UserList extends Component {

    constructor(props){
        super(props);

        this.userDelete = this.userDelete.bind(this);
        this.userUpdate = this.userUpdate.bind(this);
        this.userCreate = this.userCreate.bind(this);
                
        this.state = { users: []};

    }

    componentDidMount() {
        this.getAllUsers();
    }

    // get all users
    getAllUsers(){
        Axios.get('http://localhost:5000/users/')
        .then(response => {
            this.setState( {users: response.data} );
        })
        .catch((error) => {
            console.log(error);
        });
    }
    
    userDelete(id) {
        // delete by id user selected
        Axios.delete('http://localhost:5000/users/' + id)
        .then(res => console.log(res.data));

        this.setState({
            users: this.state.users.filter(item => item._id !== id)
        });
    }

    userUpdate(id) {
        // redirect to user-edit component
    }

    userCreate() {
        Axios.get("http://localhost:3000/create");
    }

    userListToRow() {
        return this.state.users.map(currentUser => {
            return <UserRow user={currentUser} deleteUser={this.userDelete} key={currentUser._id} />; 
        })
    }
    
    render() {
        return (
            <div className="form-group"> 
                <p>Lista de Usuários</p>
                <Link to="/user/create"
                    type="button"
                    className="btn btn-primary btn-sm">
                        <strong>Adicionar</strong>
                </Link>
                <table className="table">
                    <thead className="thead-light">
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.userListToRow() }
                    </tbody>
                </table>
            </div>

        )
    }
}