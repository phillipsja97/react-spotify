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
  const { store } = useContext(Context);

  useEffect(() => {
    spotifyApi.getTrack( store.currentSong )
    .then((response) => {
      setPlaySong(response)
      setSongTitle(response.name)
      setArtistName(response.artists[0].name);
      setAlbumImage(response.album.images[0].url)
      console.log(store.currentSong);
      console.log(playSong.id, "IDDDDDDD")
      })
  }, [playSong.id]);

  // const artistName = () => {
  //   const Name = 
  // }

  return (
    <Card className={classes.root}>
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
    </Card>
  );
}