import React, { Component } from 'react';
import warning_icon from '../img/warning_icon.svg';
import '../styles/Message.scss';

export default class WarningMessage extends Component {
  render() {
    const { message } = this.props;
    return (
      <div className="warning_message-block message-block">
        <img
          className="warning_message-block__img message-block__img"
          width="1"
          height="1"
          loading="lazy"
          src={warning_icon}
          alt="Success icon"
        />
        <h1 className="warning_message-block__message mt">{message}</h1>
        <button className="btn btn-warning mt" onClick={this.props.close}>
          OK
        </button>
      </div>
    );
  }
}
