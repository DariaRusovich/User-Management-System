import React, { Component } from 'react';
import '../styles/ModalWindow.css';

export default class ModalWindow extends Component {
  render() {
    const { visible, setVisible } = this.props;
    return (
      <div
        onClick={setVisible}
        className={`modal-window ${visible ? 'active' : ''}`}
      >
        <div
          className="modal-window__content"
          onClick={(e) => e.stopPropagation()}
        >
          <button onClick={setVisible} className="modal-close__btn">
            &#10006;
          </button>
          {this.props.children}
        </div>
      </div>
    );
  }
}