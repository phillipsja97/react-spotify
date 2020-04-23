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
    console.log(params)
    const token = params.access_token;
    console.log(token);
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      authed: token ? true : false,
      nowPlaying: { name: 'Not Checked', albumArt: '' }
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
    const { authed } = this.state;
    // if (authed) {
      return (
        <div className="App">
        <Router>
          <NavBar authed={authed}/>
            <Switch>
              <Route path="/" exact component={Auth} authed={authed} />
              <Route path="/Profile" exact component={Profile} authed={authed} />
            </Switch>
        </Router>
    </div>
      );
    // } else {
    //   return (
    //     <div className="App">
    //     <Router>
    //             <Switch>
    //               <Route path="/" exact component={Auth} authed={authed}/>
    //             </Switch>
    //     </Router>
    // </div>
    //   )
    }
  // }
}

export default App;
