import React from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';

import './NavBar.scss';

class NavBar extends React.Component {

  logout = () => {
    this.setState({ authed: false });
  }

  render() {
    const { authed } = this.props;
    return (
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand className="navbar-text">Podcast Heaven</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
            { authed ?  <Nav className="mr-auto">
                        <Nav.Link href="#home" className="navbar-text">Profile</Nav.Link>
                        <Nav.Link href="#link" className="navbar-text">Search</Nav.Link>
                        </Nav>
                    :  <Nav></Nav>
              }
            </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;