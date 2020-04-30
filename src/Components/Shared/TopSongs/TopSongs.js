import React, { useState, useEffect, useContext } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import spotifyWebApi from 'spotify-web-api-js';
import Tracks from '../Tracks/Tracks';
import List from '@material-ui/core/List';
import ListRow from '../ListRow/ListRow';
import { Context } from '../../../Helpers/Store/Store';
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
  const { store, dispatch } = useContext(Context);

  useEffect(() => {
    spotifyApi.getMyTopTracks({
      time_range: 'long_term',
      limit: '50'
    })
    .then((response) => {
      setTopSongs(response);
      dispatch( {type: "loadSong", payload:  response.items[0].id} )
    })
  }, []);

  return (
    <div className="songs">
       <div className="header">
        <CardHeader
          title="Quick Play: My Top Songs"
          className={classes.header}
        />
       </div>
      <div className="scroll">
        <List>
      { (topSongs.items) ? topSongs.items.map((songs) => <Tracks key={songs.id} songs={songs} />) : <div className="full"><img src="https://github.com/phillipsja97/react-spotify/blob/master/src/Assets/music_loading.gif?raw=true" /></div> }
        </List>
      </div>
    </div>
  )
}