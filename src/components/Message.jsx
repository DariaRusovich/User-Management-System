import React, { Component } from 'react';
import succes_icon from '../img/success_icon.svg';
import '../styles/Message.css'

export default class Message extends Component {
  render() {
    return (
      <div className="message-block">
        <img
          className="message-block__img"
          width="1"
          height="1"
          loading="lazy"
          src={succes_icon}
          alt="Success icon"
        />
        <h1 className='message-block__title'>Success!</h1>
        <button className='btn btn-success' onClick={this.props.close}>OK</button>
      </div>
    );
  }
}
