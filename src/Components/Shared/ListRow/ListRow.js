import React, { useState, useEffect } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';
import LibraryMusic from '@material-ui/icons/LibraryMusic';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 400,
    minHeight: 400,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    margin: '2em',
    backgroundColor: 'black',
    color: '#01FFFF',
  },
  media: {
    borderRadius: 6,
  },
}));

const ListRow = props => {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const [playlist, setPlaylist] = useState(props);
  const classes = useStyles();

  useEffect(() => {
    setPlaylist(props);
    console.log(playlist);
  }, [props]);

  return (
    <Link to={`/playlists/${playlist.playlist.id}`}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={playlist.playlist.images[0].url}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={playlist.playlist.name}
          />
        </CardContent>
      </Card>
    </Link>
  )
}

export default ListRow;
