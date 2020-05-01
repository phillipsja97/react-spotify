import React from 'react';
import { Navbar, Nav, Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import spotifyWebApi from 'spotify-web-api-js';
import './NavBar.scss';

const spotifyApi = spotifyWebApi();

class NavBar extends React.Component {

  logout = (e) => {
    e.preventDefault();
    this.setState({ authed: false });
  }
 
  render() {
    const { authed } = this.props;
    return (
    <Navbar>
      <Link className="nav-link" to="/">
      <Navbar.Brand id="navbar-text">Spotify Dashboard</Navbar.Brand>
      </Link>
        <Nav className="mr-auto">
          <Link className="nav-link" id="navbar-text" to="/playlists">My Playlists</Link>
          <Link className="nav-link" id="navbar-text" to="/artists">My Top Artists</Link>
        </Nav>
        { (authed) 
        ?
          <Nav className="mr-0">
            <IconButton aria-label="github">
              <LibraryMusic fontSize="large" style={ { fill: '#FFB3FD' } } onClick={this.logout}/>
            </IconButton>
          </Nav>
        :
          <Nav></Nav>
        } 
    </Navbar>
    );
  }
}

export default NavBar;