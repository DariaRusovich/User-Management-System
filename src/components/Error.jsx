import React, { Component } from 'react';
import '../styles/Error.scss';

export default class Error extends Component {
  render() {
    return (
      <div className="section">
        <div className="container error">
          <div className="error-wrap">
            <h1 className="error-title">Server Error</h1>
            <h2 className="error-title__secondary">
              'Ooops... Something went wrong. Please try again later'
            </h2>
          </div>
        </div>
      </div>
    );
  }
}
