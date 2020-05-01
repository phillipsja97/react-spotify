import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import { useFourThreeCardMediaStyles } from '@mui-treasury/styles/cardMedia/fourThree';
import { useN04TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n04';
import { useOverShadowStyles } from '@mui-treasury/styles/shadow/over';

const useStyles = makeStyles(() => ({
  root: {
    maxWidth: 300,
    minWidth: 300,
    maxHeight: 400,
    minHeight: 400,
    margin: 'auto',
    borderRadius: 12,
    padding: 12,
    marginBottom: '2em',
    backgroundColor: 'black',
    color: '#01FFFF',
  },
  media: {
    borderRadius: 6,
  },
}));

export default function ArtistCard(props) {
  const styles = useStyles();
  const mediaStyles = useFourThreeCardMediaStyles();
  const textCardContentStyles = useN04TextInfoContentStyles();
  const shadowStyles = useOverShadowStyles({ inactive: true });
  const [artists, setArtists] = useState(props);

  useEffect(() => {
    setArtists(props);
  }, [props]);

  return (
    <Link to={`/artists/${artists.artists.id}/albums`}>
      <Card className={cx(styles.root, shadowStyles.root)}>
        <CardMedia
          className={cx(styles.media, mediaStyles.root)}
          image={artists.artists.images[0].url}
        />
        <CardContent className={styles.content}>
          <TextInfoContent
            classes={textCardContentStyles}
            heading={artists.artists.name}
          />
        </CardContent>
      </Card>
    </Link>
  );
};