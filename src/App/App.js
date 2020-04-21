import React from 'react';
import './App.scss';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class App extends React.Component {
  constructor() {
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    console.log(token);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      loggedIn: token ? true : false,
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
  render () {
return (
    <div className="App">
      { this.state.loggedIn ? <h1>Thanks for logging in!</h1> : <a href='http://localhost:8888'> Login to Spotify </a>}
    </div>
  );
  }
}

export default App;
