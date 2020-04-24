import React from 'react';
import './Profile.scss';
import SpotifyWebApi from 'spotify-web-api-js';

const spotifyApi = new SpotifyWebApi();

class Profile extends React.Component {
  constructor(){
    super();
    const params = this.getHashParams();
    console.log(params)
    const token = params.access_token;
    console.log(token, 'tokenProfile');
    if (token) {
      spotifyApi.setAccessToken(token);
    }
    this.state = {
      authed: token ? true : false,
      userProfile: [],
    }
  }
  getHashParams() {
    var hashParams = {};
    var e, r = /([^&;=]+)=?([^&;]*)/g,
        q = window.location.hash.substring(1);
    e = r.exec(q)
    while (e) {
       hashParams[e[1]] = decodeURIComponent(e[2]);
       e = r.exec(q);
    }
    return hashParams;
  }

  getUserProfile() {
    spotifyApi.getMe()
      .then((response) => {
        this.setState({ userProfile: {
          name: response.display_name,
          image: response.images[0].url,
          product: response.product,
          followers: response.followers.total,
          country: response.country
        }
      })
    })
    .catch((errorFromGetProfile) => console.error(errorFromGetProfile));
 }

 componentDidMount() {
   this.getUserProfile();
 }
 
 render() {
    const { authed } = this.props;
    const { userProfile } = this.state;
    console.log(userProfile, 'user');
    return (
      <div className="profile">
      <h1 className="welcome">Hello {userProfile.name}, you are logged in!</h1>
      </div>
    )
  }
 }

 export default Profile;