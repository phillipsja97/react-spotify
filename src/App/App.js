import React, { Component } from 'react';
import './App.scss';
import SpotifyWebApi from 'spotify-web-api-js';
import { withStyles } from "@material-ui/core/styles";
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import LoginButton from './Components/Shared/LoginButtonScreen/LoginButtonScreen';
import Profile from './Components/Pages/Profile/Profile';

const spotifyApi = new SpotifyWebApi();


const styles = theme => ({
  root: {
    maxWidth: 600,
    background: 'transparent',
    border: '2px solid #01FFFF',
    borderRadius: '25px'
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  title: {
    color: '#01FFC3',
  },
  avatar: {
    backgroundColor: red[500],
  },
  text: {
    color: '#FFB3FD',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  spotify: {
    color: '#01FFC3',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  }
});

class App extends Component {
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
      loggedIn: token ? true : false,
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

  render () {
    const { classes } = this.props;
    const { token } = this.state;
return (
    <div className="App">
     { token ? <Card className={classes.root}>
      <CardHeader
        avatar={
          <Avatar alt="Remy Sharp" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" className={classes.large} />
        }
        title="Podcast Heaven"
        className={classes.title}
      />
      <LoginButton />
      <CardContent className={classes.center}>
        <Typography variant="body2" className={classes.text} component="p">
          Login using your spotify account. Create your podcast list, add your favorite podcasts, and discover new shows all in one place.
        </Typography>
        <Typography variant="body2" className={classes.spotify} component="p">
          Powered by Spotify API
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      </CardActions>
    </Card>
    : <Profile /> }
    </div>
  );
  }
}

export default withStyles(styles, { withTheme: true })(App);
