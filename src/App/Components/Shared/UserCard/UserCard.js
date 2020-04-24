import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { FixedSizeList } from 'react-window';
import spotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new spotifyWebApi();

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function renderRow(props) {
  const { index, style } = props;

  return (
    <ListItem button style={style} key={index}>
      <ListItemText primary={`Item ${index + 1}`} />
    </ListItem>
  );
}

renderRow.propTypes = {
  index: PropTypes.number.isRequired,
  style: PropTypes.object.isRequired,
};

export default function Playlists() {
  const classes = useStyles();
  const [playlists, setPlaylists] = useState([])

  useEffect(() => {
    spotifyApi.getUserPlaylists()
    .then(response => response.items).then(playlists => setPlaylists(playlists));
    console.log(playlists, "playlists");
  }, []);

  return (
    <div className={classes.root}>
      <FixedSizeList height={700} width={'100%'} itemSize={46} itemCount={200}>
        {renderRow}
      </FixedSizeList>
    </div>
  );
}