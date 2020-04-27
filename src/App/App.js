import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import Profile from './Components/Pages/Profile/Profile';
import NavBar from './Components/Shared/NavBar/NavBar';
import Auth from './Components/Pages/Auth/Auth';
import 'bootstrap/dist/css/bootstrap.min.css';

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      authed: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' },
      theToken: token,
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }
  
  render() {
    const { authed, theToken } = this.state;
    console.log(theToken, "token");
      return (
        <div className="App">
        <Router>
          <NavBar authed={authed} theToken={theToken} />
            <Switch>
              <Route path="/" exact component={Auth} authed={authed} theToken={theToken} />
              <Route path="/Profile" exact component={Profile} authed={authed} theToken={theToken} />
            </Switch>
        </Router>
    </div>
      );
    }
}

export default App;
