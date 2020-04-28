import React, { useState, useEffect, useContext } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import Typography from '@material-ui/core/typography';
import { Context } from '../../../../MusicPlayerContext';

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#01FFC3'
  },
  secondaryText: {
    color: '#01FFFF'
  }
}));

const ListRow = props => {
  const [songs, setSongs] = useState(props);
  const classes = useStyles();
  const { store, dispatch } = useContext(Context);

  useEffect(() => {
    setSongs(props);
  }, [props]);

  const songId = () => {
    return songs.songs.id;
    console.log(songs.id, 'songsID');
  }

  return (
    <ListItem>
          <ListItemAvatar>
             <Avatar alt="Remy Sharp" variant="square" src={songs.songs.album.images[0].url} />
          </ListItemAvatar>
             <ListItemText className={classes.text}
             primary={songs.songs.name}
             secondary={<Typography className={classes.secondaryText}>{songs.songs.artists[0].name}</Typography>}
             />
          <IconButton aria-label="github" id={songs.id} onClick={() => dispatch({ type: "loadSong", payload: songId() })}>
             <LibraryMusic fontSize="large"  style={ { fill: '#FFB3FD' } }/>
          </IconButton>
    </ListItem>
  )
}

export default ListRow;
