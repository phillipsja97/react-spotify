import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import Typography from '@material-ui/core/typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  text: {
    color: '#01FFC3'
  },
  secondaryText: {
    color: '#01FFFF'
  }
}));

const ListRow = props => {
  const [artists, setArtists] = useState(props);
  const classes = useStyles();

  useEffect(() => {
    setArtists(props);
  }, [props]);

  return (
    <ListItem>
          <ListItemAvatar>
             <Avatar alt="Remy Sharp" variant="square" src={artists.artists.images[0].url} />
          </ListItemAvatar>
             <ListItemText className={classes.text}
             primary={artists.artists.name}
             secondary={<Typography className={classes.secondaryText}>{artists.artists.name}</Typography>}
             />
          <Link to={`/artists/${artists.artists.id}/albums`}>
            <IconButton aria-label="github">
              <LibraryMusic fontSize="large" style={ { fill: '#FFB3FD' } }/>
            </IconButton>
          </Link>
    </ListItem>
  )
}

export default ListRow;
