import React, { Component } from 'react';


export default class Error extends Component {
  render() {
    return (
      <div className="container">
        <div className="error">
          <h1 className="primary-title">Server Error</h1>
          <h2 className="secondary-title">Ooops... Something went wrong</h2>
        </div>
      </div>
    );
  }
}
