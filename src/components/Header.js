import React, { Component } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav
} from 'reactstrap';

export default class Header extends Component {
    render() {
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand>{this.props.navBrand}</NavbarBrand>
                    <NavbarToggler  />
                </Navbar>
            </div>

        )
    }
}