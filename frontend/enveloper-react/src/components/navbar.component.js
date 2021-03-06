import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Navbar extends Component {

    render() {
        return (
            <nav className="navbar navbar-dark bg-dark navbar-expand-lg">
                <Link to="/" className="navbar-brand">Enveloper</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav ml-auto">
                        <li className="navbar-item ml-auto">
                            <Link to="/envelope" className="nav-link">Envelope</Link>
                        </li>
                        <li className="navbar-item ml-auto">
                            <Link to="/user" className="nav-link">Usuários</Link>        
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}