import React from 'react';
import { Card } from 'react-bootstrap';
import ButtonImage from '../../Shared/LoginButtonScreen/LoginButtonScreen';
import './Auth.scss';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Auth extends React.Component {
  constructor(){
    super();
    const params = this.getHashParams();
    const token = params.access_token;
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      authed: token ? true : false,
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
    return (
      <div className="auth">
              <Card className="text-center" style={{ color: 'white',
                                              width: '25em',
                                              border: '2px solid #01FFFF',
                                              background: 'transparent' }}>
                  <Card.Header className="cardTitle">Podcast Heaven</Card.Header>
                    <Card.Body className="cardBody">
                      <Card.Text className="cardText">
                         Login using your spotify account. Create your podcast list, add your favorite podcasts, and discover new shows all in one place.
                      </Card.Text>
                      <ButtonImage />
                    </Card.Body>
                  <Card.Footer className="textMuted">Powered by Spotify.</Card.Footer>
                </Card>
      </div>
    )
  }
}

export default Auth;












// import React, { Component } from 'react';
// import './Auth.scss';
// import { Redirect, Router } from 'react-router-dom'
// import SpotifyWebApi from 'spotify-web-api-js';
// import { withStyles } from "@material-ui/core/styles";
// import clsx from 'clsx';
// import Card from '@material-ui/core/Card';
// import CardHeader from '@material-ui/core/CardHeader';
// import CardMedia from '@material-ui/core/CardMedia';
// import CardContent from '@material-ui/core/CardContent';
// import CardActions from '@material-ui/core/CardActions';
// import Collapse from '@material-ui/core/Collapse';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import Typography from '@material-ui/core/Typography';
// import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import MoreVertIcon from '@material-ui/icons/MoreVert';
// import LoginButton from '../../Shared/LoginButtonScreen/LoginButtonScreen';

// const spotifyApi = new SpotifyWebApi();


// const styles = theme => ({
//   root: {
//     maxWidth: 600,
//     background: 'transparent',
//     border: '2px solid #01FFFF',
//     borderRadius: '25px'
//   },
//   media: {
//     height: 0,
//     paddingTop: '56.25%', // 16:9
//   },
//   title: {
//     color: '#01FFC3',
//   },
//   avatar: {
//     backgroundColor: red[500],
//   },
//   text: {
//     color: '#FFB3FD',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center'
//   },
//   spotify: {
//     color: '#01FFC3',
//     justifyContent: 'center',
//     alignItems: 'center',
//     textAlign: 'center'
//   }
// });

// class Auth extends Component {
//   constructor(){
//     super();
//     const params = this.getHashParams();
//     console.log(params)
//     const token = params.access_token;
//     console.log(token);
//     if (token) {
//       spotifyApi.setAccessToken(token);
//     }
//     this.state = {
//       authed: token ? true : false,
//       nowPlaying: { name: 'Not Checked', albumArt: '' }
//     }
//   }
//   getHashParams() {
//     var hashParams = {};
//     var e, r = /([^&;=]+)=?([^&;]*)/g,
//         q = window.location.hash.substring(1);
//     e = r.exec(q)
//     while (e) {
//        hashParams[e[1]] = decodeURIComponent(e[2]);
//        e = r.exec(q);
//     }
//     return hashParams;
//   }

//   render () {
//     const { classes } = this.props;
//     const { authed } = this.state;
// return (
//     <div className="Auth">
//         <Card className={classes.root}>
//           <CardHeader
//             avatar={
//               <Avatar alt="Remy Sharp" src="https://www.freepnglogos.com/uploads/spotify-logo-png/file-spotify-logo-png-4.png" className={classes.large} />
//             }
//             title="Podcast Heaven"
//             className={classes.title}
//           />
//           <LoginButton />
//           <CardContent className={classes.center}>
//             <Typography variant="body2" className={classes.text} component="p">
//               Login using your spotify account. Create your podcast list, add your favorite podcasts, and discover new shows all in one place.
//             </Typography>
//             <Typography variant="body2" className={classes.spotify} component="p">
//               Powered by Spotify API
//             </Typography>
//           </CardContent>
//           <CardActions disableSpacing>
//           </CardActions>
//         </Card>
//     </div>
//     );
//   }
// }

// export default withStyles(styles, { withTheme: true })(Auth);