import React, { useState, useEffect } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import spotifyWebApi from 'spotify-web-api-js';
import Tracks from '../Tracks/Tracks';
import List from '@material-ui/core/List';
import ListRow from '../ListRow/ListRow';
import './TopSongs.scss';

const spotifyApi = new spotifyWebApi();

const useStyles = makeStyles((theme) => ({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFB3FD',
    borderBottom: '1px solid #FFB3FD'
  }
}));

export default function TopSongs() {
  const classes = useStyles();
  const [topSongs, setTopSongs] = useState({})

  useEffect(() => {
    spotifyApi.getMyTopTracks()
    .then((response) => {
      setTopSongs(response);
    })
  }, []);

  return (
    <div className="songs">
       <div className="header">
        <CardHeader
          title="My Top Songs"
          className={classes.header}
        />
       </div>
      <div className="scroll">
        <List>
      { (topSongs.items) ? topSongs.items.map((songs) => <Tracks key={songs.id} songs={songs} />) : null }
        </List>
      </div>
    </div>
  )
}