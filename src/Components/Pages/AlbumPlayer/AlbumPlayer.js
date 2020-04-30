import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import spotifyWebApi from 'spotify-web-api-js';
import './AlbumPlayer.scss';

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

export default function AlbumPlayer(props) {
  const classes = useStyles();
  const [albumName, setAlbumName] = useState("");

    const Frame = styled('div')`
      border-radius: 1em;
    `;

    useEffect(() => {
      spotifyApi.getAlbum(props.match.params.albumId)
      .then((response) => {
        setAlbumName(response.name);
      })
    })

  return (
    <div className="player">
      <div className="container">
        <CardHeader
        title={albumName}
        className={classes.header}
          />
      </div>
        <div className="playerContainer">
            <Frame>
            <iframe 
            src={'https://open.spotify.com/embed/album/' + props.match.params.albumId}
            width="800" 
            height="880" 
            frameborder="0" 
            allowtransparency="true" 
            allow="encrypted-media">
            </iframe>
            </Frame>
        </div>
    </div>
  );
}