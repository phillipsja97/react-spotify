import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListRow from '../../Shared/ListRow/ListRow';
import spotifyWebApi from 'spotify-web-api-js';
import CardHeader from '@material-ui/core/CardHeader';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import AlbumList from '../../Shared/AlbumList/AlbumList';
import './ArtistAlbums.scss';


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

export default function Artists(props) {
  const classes = useStyles();
    const [albums, setAlbums] = useState({})

  useEffect(() => {
    spotifyApi.getArtistAlbums(props.match.params.id)
    .then((response) => {
      setAlbums(response);
    })
    console.log(albums, "album");
  }, []);

  return (
      <div className="userPlaylists">
        <div className="container">
          <CardHeader
          title="Albums"
          className={classes.header}
        />
        </div>
        <div className="listContainer">
        <List>
          { (albums.items) ? albums.items.map((album) => <AlbumList key={album.id} album={album} />) : null }
        </List>
        </div>
        <br/>
    </div>
  );
}
