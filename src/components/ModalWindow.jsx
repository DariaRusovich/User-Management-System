import React, { Component } from 'react';
import '../styles/ModalWindow.css';

export default class ModalWindow extends Component {
  render() {
    const { open, close, component } = this.props;
    return (
      <div className={`modal-window ${open ? 'active' : ''}`}>
        <div className="modal-window__content">
          <button onClick={close} className="modal-close__btn">
            &#10006;
          </button>
          {component}
          {this.props.children}
        </div>
      </div>
    );
  }
}
