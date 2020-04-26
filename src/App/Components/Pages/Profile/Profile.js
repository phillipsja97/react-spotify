import React, { useEffect, useState } from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/styles';
import Box from '@material-ui/core/Box';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { useFadedShadowStyles } from '@mui-treasury/styles/shadow/faded';
import { useGutterBorderedGridStyles } from '@mui-treasury/styles/grid/gutterBordered';
import spotifyWebApi from 'spotify-web-api-js';
import Playlist from '../../Shared/UserCard/UserCard';
import TopSongs from '../../Shared/TopSongs/TopSongs';
import './Profile.scss';

const spotifyApi = new spotifyWebApi()

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
    backgroundColor: '#43464B',
    border: '2px solid #01FFFF'
  },
  avatar: {
    width: 60,
    height: 60,
    margin: 'auto',
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    letterSpacing: '0.5px',
    marginTop: 8,
    marginBottom: 0,
    color: '#01FFC3',
  },
  subheader: {
    fontSize: 14,
    color: 'grey',
    marginBottom: '0.875em',
    color: '#01FFC3',
  },
  statLabel: {
    fontSize: 12,
    color: '#01FFC3',
    fontWeight: 500,
    fontFamily:
      '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"',
    margin: 0,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 4,
    letterSpacing: '1px',
    color: '#01FFC3',
  },
}));



const ProfileCard = () => {
  const styles = useStyles();
  const shadowStyles = useFadedShadowStyles();
  const borderedGridStyles = useGutterBorderedGridStyles({
    borderColor: 'rgba(0, 0, 0, 0.08)',
    height: '50%',
  });
  const [userProfile, setUserProfile] = useState({});

  useEffect(() => {
    spotifyApi.getMe()
    .then((response) => {
      setUserProfile(response);
    })
  }, [userProfile.display_name]);


  return (
    <div className="profile">
      <div className="profileHeader">
        <Card className={cx(styles.card, shadowStyles.root)}>
          <CardContent>
            <Avatar className={styles.avatar} src={userProfile.images ? userProfile.images[0].url : null} />
            <h3 className={styles.heading}>{userProfile.display_name}</h3>
            <span className={styles.subheader}>{userProfile.country}</span>
          </CardContent>
          <Divider light />
          <Box display={'flex'}>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Followers</p>
              <p className={styles.statValue}>{userProfile.followers ? userProfile.followers.total : null}</p>
            </Box>
            <Box p={2} flex={'auto'} className={borderedGridStyles.item}>
              <p className={styles.statLabel}>Following</p>
              <p className={styles.statValue}>12</p>
            </Box>
          </Box>
        </Card>
      </div>
      <div className="bottomWrapper">
        <div className="playlists">
          <Playlist />
        </div>
        <div className="topSongs">
          <TopSongs />
        </div>
      </div>
    </div> 
  );
};

export default ProfileCard;
