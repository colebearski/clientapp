import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import { compose } from "redux";
import { connect } from "react-redux";
// Need to use firebase for auth
import { firebaseConnect } from "react-redux-firebase";

class AppNavbar extends Component {
  state = {
    isAuthenticated: false
  };

  // when we get something from redux state and we want to manipulate
  // used to be componentwillreceiveprops
  static getDerivedStateFromProps(props, state) {
    // don't use this from getderived
    const { auth } = props;

    // Check for UID
    if (auth.uid) {
      return { isAuthenticated: true };
    } else {
      return { isAuthenticated: false };
    }
  }

  onLogout = e => {
    e.preventDefault();

    const { firebase } = this.props;

    firebase.logout();
  };

  render() {
    const { isAuthenticated } = this.state;
    const { auth } = this.props;

    return (
      <nav className="navbar navbar-expand-md navbar-dark bg-info mb-4">
        <div className="container">
          <Link to="/" className="navbar-brand">
            ClientPanel
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarMain"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarMain">
            <ul className="navbar-nav mr-auto">
              {/* if authenticated go to home, if not null */}

              {isAuthenticated ? (
                <li className="nav-item">
                  <Link to="/" className="nav-link">
                    Dashboard
                  </Link>
                </li>
              ) : null}
            </ul>

            {isAuthenticated ? (
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  {/* display email if logged in */}
                  <a href="#!" className="nav-link">
                    {auth.email}
                  </a>
                </li>

                <li className="nav-item">
                  {/* display email if logged in */}
                  <a href="#!" className="nav-link" onClick={this.onLogout}>
                    Logout
                  </a>
                </li>
              </ul>
            ) : null}
          </div>
        </div>
      </nav>
    );
  }
}

AppNavbar.PropTypes = {
  firebase: PropTypes.object.isRequired,
  auth: PropTypes.object.isRequired
};

// firebase connect and regular connect
export default compose(
  firebaseConnect(),
  connect((state, props) => ({
    auth: state.firebase.auth
    //n can now access autho thru this.props.auth
  }))
)(AppNavbar);
