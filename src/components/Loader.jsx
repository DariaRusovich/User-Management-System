import React, { Component } from 'react';
import '../styles/Loader.css';

export default class Loader extends Component {
  render() {
    return (
      <div className="container loader-wrap"> 
      <div className="lds-ring"><div></div><div></div><div></div><div></div></div>
      </div>
    );
  }
}
