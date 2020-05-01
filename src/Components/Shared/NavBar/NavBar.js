import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavBar.scss';

class NavBar extends React.Component {

  logout = (e) => {
    e.preventDefault();
    this.setState({ authed: false });
  }
 
  render() {
    return (
    <Navbar>
      <Link className="nav-link" to="/">
      <Navbar.Brand id="navbar-text">Spotify Dashboard</Navbar.Brand>
      </Link>
        <Nav className="mr-auto">
          <Link className="nav-link" id="navbar-text" to="/playlists">My Playlists</Link>
          <Link className="nav-link" id="navbar-text" to="/artists">My Top Artists</Link>
        </Nav>
        }
    </Navbar>
    );
  }
}

export default NavBar;