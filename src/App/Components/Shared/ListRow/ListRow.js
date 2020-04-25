import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';

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
      </ListItem>
  )
}

export default ListRow;
