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
  },
  songsContainer: {
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
  },
  scrollContainer: {
    marginRight: '12em',
    marginLeft: '12em',
  }
}));

export default function TopArtists() {
  const classes = useStyles();
  const [topArtists, setTopArtists] = useState({})

  useEffect(() => {
    spotifyApi.getMyTopArtists({
      limit: '50',
      time_range: 'long_term'
    })
    .then((response) => {
      setTopArtists(response);
    })
    console.log(topArtists, 'topArtists')
  }, []);

  return (
    <div className="songsContainer">
       <div className="header">
        <CardHeader
          title="My Top Artists"
          className={classes.header}
        />
       </div>
      <div className="scrollContainer">
        <List>
      { (topArtists.items) ? topArtists.items.map((artists) => <ArtistList key={artists.id} artists={artists} />) : null }
        </List>
      </div>
    </div>
  )
}