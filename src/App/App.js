import React from 'react';
import SpotifyWebApi from 'spotify-web-api-js';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect } from 'react-router-dom';
import Profile from '../Components/Pages/Profile/Profile';
import NavBar from '../Components/Shared/NavBar/NavBar';
import Auth from '../Components/Pages/Auth/Auth';
import { Context, reducer, initialState } from '../Helpers/Store/Store';
import Playlists from '../Components/Pages/Playlists/Playlists';
import PlaylistPlayer from '../Components/Pages/PlaylistPlayer/PlaylistPlayer';
import Artists from '../Components/Shared/Arists/Artists';
import ArtistsPlayer from '../Components/Pages/ArtistsPlayer/ArtistsPlayer';
import ArtistAlbums from '../Components/Pages/ArtistsAlbums/ArtistAlbums';
import AlbumPlayer from '../Components/Pages/AlbumPlayer/AlbumPlayer';
import 'bootstrap/dist/css/bootstrap.min.css';

const spotifyApi = new SpotifyWebApi();

const PrivateRoute = ({ component: Component, authed, ...rest }) => {
  const routeChecker = (props) => (authed === true ? <Component {...props} {...rest}/> : <Redirect to={{ pathname: '/auth', state: { from: props.location } }} />);
  return <Route {...rest} render={(props) => routeChecker(props)} />;
};

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
      return (
        <div className="App">
          <Router>
            <NavBar authed={authed} theToken={theToken} />
              <Switch>
                <Route path="/auth" exact component={Auth} authed={authed} theToken={theToken} />
                <PrivateRoute path="/" exact component={Profile} authed={authed} theToken={theToken} />
                <PrivateRoute path="/playlists" exact component={Playlists} authed={authed} />
                <PrivateRoute path="/playlists/:id" exact component={PlaylistPlayer} authed={authed} />
                <PrivateRoute path="/artists" exact component={Artists} authed={authed} />
                <PrivateRoute path="/artists/:id/albums" exact component={ArtistAlbums} authed={authed} />
                <PrivateRoute path="/artists/:id/albums/:albumId" exact component={AlbumPlayer} authed={authed} />
              </Switch>
          </Router>
        </div>
      );
    }
}

export default App;
