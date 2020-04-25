import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListRow from '../ListRow/ListRow';
import spotifyWebApi from 'spotify-web-api-js';
import CardHeader from '@material-ui/core/CardHeader';
import './UserCard.scss';


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

export default function FolderList() {
  const classes = useStyles();
    const [playlists, setPlaylists] = useState({})

  useEffect(() => {
    spotifyApi.getUserPlaylists()
    .then((response) => {
      setPlaylists(response);
    })
    console.log(playlists, "playlists");
  }, []);

  return (
    <div className="userPlaylists">
      <div className="header">
        <CardHeader
          title="My Playlists"
          className={classes.header}
        />
      </div>
      <div className="scroll">
        <List>
          { (playlists.items) ? playlists.items.map((playlist) => <ListRow key={playlist.id} playlist={playlist} />) : null }
        </List>
      </div>
    </div>
  );
}




// import React, { useState, useEffect } from 'react';
// import PropTypes from 'prop-types';
// import { makeStyles } from '@material-ui/core/styles';
// import ListItem from '@material-ui/core/ListItem';
// import ListItemText from '@material-ui/core/ListItemText';
// import { FixedSizeList } from 'react-window';
// import spotifyWebApi from 'spotify-web-api-js';
// import RenderRow from '../ListRow/ListRow';

// const spotifyApi = new spotifyWebApi();

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '100%',
//     backgroundColor: theme.palette.background.paper,
//   },
// }));

// export default function Playlists() {
//   const classes = useStyles();
//   const [playlists, setPlaylists] = useState([])

//   useEffect(() => {
//     spotifyApi.getUserPlaylists()
//     .then((response) => {
//       setPlaylists(playlists => [...playlists, response.items])
//     })
//     console.log(playlists, "playlists");
//   }, [playlists[0]]);

//   return (
//     <div className={classes.root}>
//       <FixedSizeList height={700} width={'100%'} itemSize={46} itemCount={200}>
//         { playlists.map((playlist) => <RenderRow key={playlist.id} playlist={playlist} />)}
//       </FixedSizeList>
//     </div>
//   );
// }