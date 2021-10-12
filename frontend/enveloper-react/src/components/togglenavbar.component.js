// toggle style navbar option for simple navbar.component.js

import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';

class ToggleNavbar extends Component {
    // instead of constructor binding toggle function to this it's using arrow function

    state = {
        isOpen: false
    }

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render() {
        return(
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">EnveloperWEB</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink href="/envelope">Envelope</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink href="/user">Usuário</NavLink>
                                </NavItem>                            
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    }

};

export default ToggleNavbar;