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
import styled from '@emotion/styled';
import './Player.scss';

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
  const [trackUri, setTrackUri] = useState("");
  const { store, theToken } = useContext(Context);

  useEffect(() => {
    spotifyApi.getTrack( store.currentSong )
    .then((response) => {
      setTrackUri(response.uri);
      setPlaySong(response)
      setSongTitle(response.name)
      setArtistName(response.artists[0].name);
      setAlbumImage(response.album.images[0].url)
      })
  }, [store.currentSong]);


    const Frame = styled('div')`
      border-radius: 1em;
    `;

  return (
    <div className="player">
    { (!store.currentSong) ? <div className="full"><img src="https://github.com/phillipsja97/react-spotify/blob/master/src/Assets/music_loading.gif?raw=true" /></div>
                : 
                  <Frame>
                  <iframe
                  src={'https://open.spotify.com/embed/track/' + store.currentSong}
                  width="540"
                  height="520"
                  frameborder="0"
                  allowtransparency="true"
                  allow="encrypted-media"
                  >
                </iframe>
                  </Frame>
    }
    </div> 
  )
}