import React, { Component } from 'react';
import './Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="container"> 
        <div className="loader">Loading...</div>
      </div>
    );
  }
}
