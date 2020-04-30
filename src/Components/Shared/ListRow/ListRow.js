import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#01FFC3'
  },
}));

const ListRow = props => {
  const [playlist, setPlaylist] = useState(props);
  const classes = useStyles();

  useEffect(() => {
    setPlaylist(props);
    console.log(playlist);
  }, [props]);

  return (
    <ListItem>
          <ListItemAvatar>
             <Avatar alt="Remy Sharp" variant="square" src={playlist.playlist.images[0].url} />
          </ListItemAvatar>
             <ListItemText className={classes.text} primary={playlist.playlist.name} secondary={playlist.playlist.owner.name} />
          <Link to={`/playlists/${playlist.playlist.id}`}>
            <IconButton aria-label="github">
              <LibraryMusic fontSize="large" style={ { fill: '#FFB3FD' } }/>
            </IconButton>
          </Link>
    </ListItem>
  )
}

export default ListRow;
