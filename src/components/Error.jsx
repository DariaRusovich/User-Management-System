import React, { Component } from 'react';
import '../styles/Error.css';

export default class Error extends Component {
  render() {
    const { error } = this.props;

    return (
      <div className="section">
        <div className="container error">
          <h1 className="error-title">Server Error</h1>
          <h2 className="error-title__secondary">
            'Ooops... Something went wrong. Please try again later'
          </h2>
          
        </div>
      </div>
    );
  }
}
