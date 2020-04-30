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

export default function AlbumList(props) {
  const [album, setAlbum] = useState(props);
  const classes = useStyles();

  useEffect(() => {
    setAlbum(props);
    console.log(album);
  }, [props]);

  return (
    <ListItem>
          <ListItemAvatar>
             <Avatar alt="Remy Sharp" variant="square" src={album.album.images[0].url} />
          </ListItemAvatar>
             <ListItemText className={classes.text} primary={album.album.name} secondary={album.album.release_date} />
          <Link to={`/artists/${album.album.artists[0].id}/albums/${album.album.id}`}>
            <IconButton aria-label="github">
              <LibraryMusic fontSize="large" style={ { fill: '#FFB3FD' } }/>
            </IconButton>
          </Link>
    </ListItem>
  )
}
