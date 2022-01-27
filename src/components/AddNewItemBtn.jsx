import React, { Component } from 'react';


export default class AddNewItemBtn extends Component {
  render() {
    return (
      <button className='btn btn-success'>
        + Add {this.props.children}
      </button>
    );
  }
}