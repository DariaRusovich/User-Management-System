import React, { Component } from 'react';
import '../styles/ModalWindow.css';

export default class ModalWindow extends Component {
  handleKeyUp = (e) => {};
  render() {
    const { visible, setVisible } = this.props;
    return (
      <div
        onClick={setVisible}
        onKeyUp={this.handleKeyUp}
        className={`modal-window ${visible ? 'active' : ''}`}
      >
        <div
          onClick={(e) => e.stopPropagation()}
          className="modal-window__content"
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
