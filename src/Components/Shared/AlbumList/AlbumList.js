import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useCoverCardMediaStyles } from '@mui-treasury/styles/cardMedia/cover';
import { useLightTopShadowStyles } from '@mui-treasury/styles/shadow/lightTop';
import './AlbumList.scss';

const useStyles = makeStyles(() => ({
  root: {
    minWidth: 440,
    maxWidth: 440,
    marginBottom: '2em',
    marginLeft: '2em',
    borderRadius: 0,
    position: 'relative',
    opacity: 0.7,
    textDecoration: 'none',
  },
  content: {
    padding: 24,
  },
  cta: {
    display: 'block',
    textAlign: 'center',
    color: '#FFB3FD',
    letterSpacing: '3px',
    fontWeight: 200,
    fontSize: 12,
  },
  title: {
    color: '#FFB3FD',
    letterSpacing: '2px',
  },
}));

export default function AlbumList(props) {
  const styles = useStyles();
  const mediaStyles = useCoverCardMediaStyles();
  const shadowStyles = useLightTopShadowStyles();
  const [album, setAlbum] = useState(props);

  useEffect(() => {
    setAlbum(props);
  }, [props]);

  return (
    <Link to={`/artists/${album.album.artists[0].id}/albums/${album.album.id}`}>
    <Card className={cx(styles.root, shadowStyles.root)}>
      <CardMedia classes={mediaStyles} className="media" image={album.album.images[0].url} />
      <CardActionArea>
        <CardContent className={styles.content}>
          <Box
            display={'flex'}
            flexDirection={'column'}
            alignItems={'center'}
            justifyContent={'center'}
            minHeight={360}
            color={'common.white'}
            textAlign={'center'}
          >
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
    </Link>
  );
};





// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import ListItemAvatar from '@material-ui/core/ListItemAvatar';
// import Avatar from '@material-ui/core/Avatar';
// import IconButton from '@material-ui/core/IconButton';
// import LibraryMusic from '@material-ui/icons/LibraryMusic';
// import { Link } from 'react-router-dom';

// const useStyles = makeStyles((theme) => ({
//   text: {
//     color: '#01FFC3'
//   },
// }));

// export default function AlbumList(props) {
//   const [album, setAlbum] = useState(props);
//   const classes = useStyles();

//   useEffect(() => {
//     setAlbum(props);
//     console.log(album);
//   }, [props]);

//   return (
//     <ListItem>
//           <ListItemAvatar>
//              <Avatar alt="Remy Sharp" variant="square" src={album.album.images[0].url} />
//           </ListItemAvatar>
//              <ListItemText className={classes.text} primary={album.album.name} secondary={album.album.release_date} />
//           <Link to={`/artists/${album.album.artists[0].id}/albums/${album.album.id}`}>
//             <IconButton aria-label="github">
//               <LibraryMusic fontSize="large" style={ { fill: '#FFB3FD' } }/>
//             </IconButton>
//           </Link>
//     </ListItem>
//   )
// }
