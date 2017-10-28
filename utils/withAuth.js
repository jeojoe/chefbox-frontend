import React, { Component } from 'react';
import jwt from 'jsonwebtoken';

function withAuth(AuthComponent) {
  return class ComposedComponent extends Component {
    state = {
      isLoggedIn: false,
    }

    componentDidMount() {
      const token = window.localStorage.getItem('@chefbox-token');
      if (token) {
        const decoded = jwt.decode(token);
        if (decoded && decoded.isAdmin) {
          this.setState({ isLoggedIn: true });
        }
      }
    }

    render() {
      const { isLoggedIn } = this.state;
      if (!isLoggedIn) {
        return null;
      }

      return (
        <AuthComponent />
      );
    }
  };
}

export default withAuth;
