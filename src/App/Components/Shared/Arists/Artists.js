import React, { useState, useEffect } from 'react';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import spotifyWebApi from 'spotify-web-api-js';
import ArtistList from '../ArtistList/ArtistList';
import List from '@material-ui/core/List';
import './Artists.scss';

const spotifyApi = new spotifyWebApi();

const useStyles = makeStyles((theme) => ({
  header: {
    justifyContent: 'center',
    alignItems: 'center',
    color: '#FFB3FD',
    borderBottom: '1px solid #FFB3FD'
  }
}));

export default function TopArtists() {
  const classes = useStyles();
  const [topArtists, setTopArtists] = useState({})

  useEffect(() => {
    spotifyApi.getMyTopArtists()
    .then((response) => {
      setTopArtists(response);
    })
    console.log(topArtists, 'topArtists')
  }, []);

  return (
    <div className="songs">
       <div className="header">
        <CardHeader
          title="My Top Artists"
          className={classes.header}
        />
       </div>
      <div className="scroll">
        <List>
      { (topArtists.items) ? topArtists.items.map((artists) => <ArtistList key={artists.id} artists={artists} />) : null }
        </List>
      </div>
    </div>
  )
}