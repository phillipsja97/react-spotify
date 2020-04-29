import React, { useContext, useEffect, useState, useReducer } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
import PlayArrowIcon from '@material-ui/icons/PlayArrow';
import SkipNextIcon from '@material-ui/icons/SkipNext';
import spotifyWebApi from 'spotify-web-api-js';
import { Context } from '../../../Helpers/Store/Store';
import Script from 'react-load-script';
import styled from '@emotion/styled';

const spotifyApi = new spotifyWebApi();

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'black',
    borderBottom: '1px solid white',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 151,
  },
  controls: {
    display: 'flex',
    alignItems: 'center',
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
    color: 'white',
  },
  playIcon: {
    height: 38,
    width: 38,
    color: 'white',
  },
  color: {
    color: 'white',
  }
}));

export default function MediaControlCard() {
  const classes = useStyles();
  const theme = useTheme();
  const [playSong, setPlaySong] = useState({})
  const [songTitle, setSongTitle] = useState("");
  const [artistName, setArtistName] = useState("");
  const [albumImage, setAlbumImage] = useState("");
  const [deviceId, setDeviceId] = useState("");
  const [uri, setUri] = useState("");
  const { store, theToken } = useContext(Context);

  useEffect(() => {
    spotifyApi.getTrack( store.currentSong )
    .then((response) => {
      setUri(response.uri);
      setPlaySong(response)
      setSongTitle(response.name)
      setArtistName(response.artists[0].name);
      setAlbumImage(response.album.images[0].url)
      })
    spotifyApi.play({ uri })
  }, [store.currentSong]);

    const handleScriptLoad = () => new Promise((resolve, reject) => {
      window.onSpotifyWebPlaybackSDKReady = () => {
        const token = spotifyApi.getAccessToken();
        const player = new window.Spotify.Player({
          name: 'Web Playback SDK Quick Start Player',
          getOAuthToken: cb => { cb(token); }
        });

          resolve(player.connect().then(success => {
            if (success) {
              console.log('The Web Playback SDK successfully connected to Spotify!');
              player.on('ready', ({ device_id }) => {
                console.log('The Web Playback SDK is ready to play music!');
                setDeviceId(device_id)
                console.log('Device ID', device_id);
              })
            }
            const device = spotifyApi.getMyDevices()
            console.log(device);
          }))
        }
    })

    const Frame = styled('div')`
      border-radius: 1em;
      overflow: hidden;
    `;

  return (
    <div className="player">
    <Script 
      url="https://sdk.scdn.co/spotify-player.js" 
      onLoad={handleScriptLoad}
    />
    <Frame>
    <iframe
      title={uri}
      src={'https://open.spotify.com/embed?uri=' + uri}
      frameBorder="0"
      allowtransparency="true"
      width='100%'
      height='100%'
      allow="encrypted-media">
    </iframe>
  </Frame>
    {/* <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.color}>
            {songTitle}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.color}>
            {artistName}
          </Typography>
        </CardContent>
        <div className={classes.controls}>
          <IconButton aria-label="previous" className={classes.color}>
            {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
          </IconButton>
          <IconButton aria-label="play/pause">
            <PlayArrowIcon className={classes.playIcon} />
          </IconButton>
          <IconButton aria-label="next" className={classes.color}>
            {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
          </IconButton>
        </div>
      </div>
      <CardMedia
        className={classes.cover}
        image={albumImage}
        title="Live from space album cover"
      />
    </Card> */}
    </div>
  );
}