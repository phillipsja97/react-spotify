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

const spotifyApi = new spotifyWebApi()

const useStyles = makeStyles(({ palette }) => ({
  card: {
    borderRadius: 12,
    minWidth: 256,
    textAlign: 'center',
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
  },
  subheader: {
    fontSize: 14,
    color: 'grey',
    marginBottom: '0.875em',
  },
  statLabel: {
    fontSize: 12,
    color: 'grey',
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
  const [followers, setFollowers] = useState(0);

  useEffect(() => {
    spotifyApi.getMe()
    .then((response) => {
      setUserProfile(response);
    })
  }, [userProfile.display_name]);


  return (
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
  );
};

export default ProfileCard;

// import React from 'react';
// import './Profile.scss';
// import SpotifyWebApi from 'spotify-web-api-js';

// const spotifyApi = new SpotifyWebApi();

// class Profile extends React.Component {
//   constructor(){
//     super();
//     const params = this.getHashParams();
//     console.log(params)
//     const token = params.access_token;
//     console.log(token, 'tokenProfile');
//     if (token) {
//       spotifyApi.setAccessToken(token);
//     }
//     this.state = {
//       authed: token ? true : false,
//       userProfile: [],
//     }
//   }
//   getHashParams() {
//     var hashParams = {};
//     var e, r = /([^&;=]+)=?([^&;]*)/g,
//         q = window.location.hash.substring(1);
//     e = r.exec(q)
//     while (e) {
//        hashParams[e[1]] = decodeURIComponent(e[2]);
//        e = r.exec(q);
//     }
//     return hashParams;
//   }

//   getUserProfile() {
//     spotifyApi.getMe()
//       .then((response) => {
//         this.setState({ userProfile: {
//           name: response.display_name,
//           image: response.images[0].url,
//           product: response.product,
//           followers: response.followers.total,
//           country: response.country
//         }
//       })
//     })
//     .catch((errorFromGetProfile) => console.error(errorFromGetProfile));
//  }

//  componentDidMount() {
//    this.getUserProfile();
//  }
 
//  render() {
//     const { authed } = this.props;
//     const { userProfile } = this.state;
//     console.log(userProfile, 'user');
//     return (
//       <div className="profile">
//       <h1 className="welcome">Hello {userProfile.name}, you are logged in!</h1>
//       </div>
//     )
//   }
//  }

//  export default Profile;