import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListRow from '../ListRow/ListRow';
import spotifyWebApi from 'spotify-web-api-js';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import './UserCard.scss';


const spotifyApi = new spotifyWebApi();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '50vw',
    backgroundColor: theme.palette.background.paper,
  },
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFB3FD',
    borderBottom: '1px solid #FFB3FD'
  }
}));

export default function FolderList() {
  const classes = useStyles();
    const [playlists, setPlaylists] = useState({})

  useEffect(() => {
    spotifyApi.getUserPlaylists()
    .then((response) => {
      setPlaylists(response);
    })
    console.log(playlists, "playlists");
  }, []);

  return (
      <div className="userPlaylists">
          <CardHeader
          title="My Playlists"
          className={classes.header}
        />
      <div className="scroll">
        <List>
          { (playlists.items) ? playlists.items.map((playlist) => <ListRow key={playlist.id} playlist={playlist} />) : null }
        </List>
      </div>
    </div>
  );
}