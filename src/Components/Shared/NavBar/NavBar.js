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
    <Navbar bg="dark" variant="dark">
      <Link className="nav-link" to="/">
      <Navbar.Brand href="#home">Spotify Dashboard</Navbar.Brand>
      </Link>
        <Nav className="mr-auto">
          <Link className="nav-link" to="/playlists">My Playlists</Link>
          <Link className="nav-link" to="/artists">My Top Artists</Link>
        </Nav>
    </Navbar>
    );
  }
}

export default NavBar;