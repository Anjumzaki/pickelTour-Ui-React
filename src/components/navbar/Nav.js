import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';
import logo from '../../assets/logo.png'
import "./Nav.css"
export default class Example extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div className="header-container">
        <Navbar light expand="lg" className="header-container2">
          <NavbarBrand to="/"><img className="header-logo" src={logo} alt="" /></NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto " navbar>
              <NavItem>
                <NavLink  ><a className="header-link" href="/">Tournaments</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink  ><a className="header-link" href="/">Players</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><a className="header-link" href="/">Management</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><a className="header-link" href="/">Login</a></NavLink>
              </NavItem>
              <NavItem>
                <NavLink ><a className="header-link" href="/">Sign Up</a></NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}