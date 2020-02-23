import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';

const TopNavBar = () => {
  return (
    <Fragment>
      <ul className="topnavbar">
        <div>
          <li style={{ opacity: 1 }}>Login</li>
          <li>Online Check In</li>
          <li>
            <Link to="/contactus">Contact Us</Link>
          </li>
          <li>
            <Link to="/aboutus">About Us</Link>
          </li>
        </div>
        <div className="navlogo">
          <li>
            <Link to="/">TravoscopeHotels</Link>
          </li>
        </div>
      </ul>
    </Fragment>
  );
};

export default TopNavBar;
