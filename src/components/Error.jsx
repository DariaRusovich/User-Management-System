import React, { Component } from 'react';
import error from '../img/error.jpg';
import '../styles/Error.css';

export default class Error extends Component {
  render() {
    return (
      <div className="section">
        <div className="container error">
          <h1 className="error-title">Server Error</h1>
          <h2 className="error-title__secondary">
            Ooops... Something went wrong. Please try again later
          </h2>
          <img
            className="error-img"
            width="1"
            height="1"
            loading="lazy"
            src={error}
            alt="Not Working"
          />
        </div>
      </div>
    );
  }
}
