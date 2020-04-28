import React, { useContext, useEffect } from 'react';
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
import { Context } from '../../../../MusicPlayerContext';

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
  const { store, dispatch } = useContext(Context);


  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography component="h5" variant="h5" className={classes.color}>
            Live From Space
          </Typography>
          <Typography variant="subtitle1" color="textSecondary" className={classes.color}>
            Mac Miller
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
        image="https://upload.wikimedia.org/wikipedia/en/thumb/5/5f/Mac_Miller_Live_from_Space.jpg/220px-Mac_Miller_Live_from_Space.jpg"
        title="Live from space album cover"
      />
    </Card>
  );
}