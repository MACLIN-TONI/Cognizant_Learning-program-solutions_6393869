import React, { Component } from 'react';
import Guest from './Guest';
import User from './User';

class LoginControl extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
  }

  handleLoginClick = () => {
    this.setState({ isLoggedIn: true });
  };

  handleLogoutClick = () => {
    this.setState({ isLoggedIn: false });
  };

  render() {
    const { isLoggedIn } = this.state;
    const button = isLoggedIn ? (
      <button onClick={this.handleLogoutClick}>Logout</button>
    ) : (
      <button onClick={this.handleLoginClick}>Login</button>
    );

    const page = isLoggedIn ? <User /> : <Guest />;

    return (
      <div>
        <h1>Ticket Booking App</h1>
        {button}
        <hr />
        {page}
      </div>
    );
  }
}

export default LoginControl;
