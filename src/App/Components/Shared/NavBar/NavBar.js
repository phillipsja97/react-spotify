import React from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import spotifyWebApi from 'spotify-web-api-js';
import './NavBar.scss';

const spotifyApi = spotifyWebApi();

class NavBar extends React.Component {
  state = {
    token: ''
  }

  logout = () => {
    this.setState({ authed: false });
  }
 
  render() {
    const { authed } = this.props;
    return (
      <Navbar expand="lg" className="navbar">
        <Navbar.Brand className="navbar-text">Podcast Heaven</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
      </Navbar>
    );
  }
}

export default NavBar;