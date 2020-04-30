import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';
import spotifyWebApi from 'spotify-web-api-js';
import './SongsPlayer.scss';

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

export default function SongsPlayer(props) {
  const classes = useStyles();
  const [songName, setSongName] = useState("");

    const Frame = styled('div')`
      border-radius: 1em;
    `;

    useEffect(() => {
      spotifyApi.getTrack(props.match.params.id)
      .then((response) => {
        setSongName(response.name);
      })
    })

  return (
    <div className="player">
      <div className="container">
        <CardHeader
        title={songName}
        className={classes.header}
          />
      </div>
        <div className="playerContainer">
            <Frame>
            <iframe 
            src={'https://open.spotify.com/embed/track/' + props.match.params.id}
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
