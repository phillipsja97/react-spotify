import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListRow from '../../Shared/ListRow/ListRow';
import spotifyWebApi from 'spotify-web-api-js';
import CardHeader from '@material-ui/core/CardHeader';
import './Playlists.scss';


const spotifyApi = new spotifyWebApi();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50vw',
    backgroundColor: theme.palette.background.paper,
    margin: '2em',
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFB3FD',
    borderBottom: '1px solid #FFB3FD'
  }
}));

export default function Playlists() {
  const classes = useStyles();
    const [playlists, setPlaylists] = useState({})

  useEffect(() => {
    spotifyApi.getUserPlaylists()
    .then((response) => {
      setPlaylists(response);
    })
  }, []);

  return (
    <div className="userPlaylists">
    { (playlists.items)
      ? 
          <div className="userPlaylists">
            <div className="container">
              <CardHeader
              title="My Playlists"
              className={classes.header}
            />
            </div>
            <div className="listContainer">
              { (playlists.items) ? playlists.items.map((playlist) => <ListRow key={playlist.id} playlist={playlist} />) : null }
            </div>
            <br/>
        </div>
      : <div className="full">
         <img src="https://github.com/phillipsja97/react-spotify/blob/master/src/Assets/music_loading.gif?raw=true" alt="loader" />
        </div>
    }
    </div>
  );
}
