import React, { Component } from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import UserMain from "./UserMain"

class Profile extends Component {
  render() {
    const { user } = this.props.auth0;
    return (
        <UserMain
            user={user}
        />
    );
  }
}

export default withAuth0(Profile);