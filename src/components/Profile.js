import React from 'react';

import AuthContext from '../auth-context';

// old approach

const profile = (props) => (
  <AuthContext.Consumer>
    {authContext => {
      return (
        <h1>{authContext.isAuth ? 'User logged in!' : 'Sign in!'}</h1>
      );
    }}
  </AuthContext.Consumer>
);

export default profile;
