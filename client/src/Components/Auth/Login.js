import React, { useState } from 'react';
import LoginForm from '../Forms/LoginForm';
import Button from '@material-ui/core/Button';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const Login = ({ auth: { isAuthenticated } }) => {
  return (
    <div className="loginpage">
      <div>
        <LoginForm />
      </div>
      <div className="vl"></div>
      <div className="loginpagetext">
        <h2>Travoscope Hotels</h2>
        <p>
          Bringing people together is what we’ve done since opening our first
          hotel in 1937. Now we’re deeply rooted in over 400 communities across
          the globe. We are proud to act as a point of connection for millions
          of travelers, many just like you. Welcome.
        </p>
        <div className="logintextsection"></div>
        <ul>
          <li>Enjoy our resonable rates, everytime you book</li>
          <li>Free airport pickup and drop</li>
          <li>Earn loyality points</li>
          <li>Wifi connectivity in every room</li>
        </ul>
        <Link to="/signup">
          <Button
            variant="outlined"
            style={{ width: '20rem', margin: '10px 20px 20px 120px' }}
          >
            Join Now
          </Button>
        </Link>
      </div>
    </div>
  );
};

Login.propTypes = {
  auth: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, {})(Login);
