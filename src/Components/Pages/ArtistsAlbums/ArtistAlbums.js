import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import spotifyWebApi from 'spotify-web-api-js';
import CardHeader from '@material-ui/core/CardHeader';
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
    spotifyApi.getArtistAlbums(props.match.params.id, { market: 'es', include_groups: 'album' })
    .then((response) => {
      setAlbums(response);
    })
  }, []);

  return (
    <div className="userPlaylistsCont">
    { (albums.items) 
      ? <div className="userPlaylists">
          <div className="Container">
            <CardHeader
            title="Albums"
            className={classes.header}
            />
          </div>
          <div className="artistListContainer">
              { (albums.items) ? albums.items.map((album) => <AlbumList key={album.id} album={album} />) : null }
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

