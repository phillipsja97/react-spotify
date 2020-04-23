import React from 'react';
import './Profile.scss';

class Profile extends React.Component {
  render() {
    const { authed } = this.props;
    return (
      <div className="profile">
      <h1 className="welcome">Hello, you are logged in!</h1>
      </div>
    )
  }
 }

 export default Profile;