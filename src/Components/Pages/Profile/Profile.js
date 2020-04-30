import React, { useEffect, useState, useReducer } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import spotifyWebApi from 'spotify-web-api-js';
import Playlist from '../../Shared/UserCard/UserCard';
import TopSongs from '../../Shared/TopSongs/TopSongs';
import Artists from '../../Shared/Arists/Artists';
import Player from '../../Shared/Player/Player';
import { Context, reducer, initialState } from '../../../Helpers/Store/Store';
import './Profile.scss';

const spotifyApi = new spotifyWebApi()

const useStyles = makeStyles((theme) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    backgroundColor: 'black',
    border: '2px solid #01FFFF'
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
    color: '#01FFC3',
  },
  subheader: {
    fontSize: 14,
    color: 'grey',
    marginBottom: '0.875em',
    color: '#01FFC3',
  },
  statLabel: {
    fontSize: 12,
    color: '#01FFC3',
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
    color: '#01FFC3',
  },
  buttons: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    color: '#FFB3FD',
    alignItems: 'center',
}
}));



export default function ProfileCard(props) {
  const classes = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  const [userProfile, setUserProfile] = useState({});
  const [viewRender, setViewRender] = useState('');
  const [theToken, setTheToken] = useState(props);
  const [store, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    spotifyApi.getMe(theToken)
    .then((response) => {
      setUserProfile(response);
    })
    console.log(props);
    // const access = window.location.hash.split("#access_token=")[1];
    // const token = access.split("&refresh_token=")[0];
    // setTheToken(token);
  }, [userProfile.display_name]);

  const PlaylistRender = (e) => {
    setViewRender('Playlist');
  }

  const SongsRender = (e) => {
    setViewRender('Songs');
  }

  const ArtistRender = (e) => {
    setViewRender('Artists');
  }

  return (
    <Context.Provider 
      value={{
        store,
        dispatch,
        theToken
      }}>
      <div className="profile">
        <div className="profileHeader">
          <Card className={cx(classes.card, shadowStyles.root)}>
            <CardContent>
              <Avatar className={classes.avatar} src={userProfile.images ? userProfile.images[0].url : null} />
              <h3 className={classes.heading}>{userProfile.display_name}</h3>
              <span className={classes.subheader}>{userProfile.country}</span>
            </CardContent>
            <Divider light />
            <Box display={'flex'}>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={classes.statLabel}>Followers</p>
                <p className={classes.statValue}>{userProfile.followers ? userProfile.followers.total : null}</p>
              </Box>
              <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
                <p className={classes.statLabel}>Following</p>
                <p className={classes.statValue}>12</p>
              </Box>
            </Box>
          </Card>
        </div>
        <div className="bottomWrapper">
            <div className="playlists">
              <TopSongs />
            </div>
            <div className="display">
              <Player />
            </div>
        </div>
      </div>
    </Context.Provider>
  );
};
