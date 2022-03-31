import React, { Component } from 'react';
import succes_icon from '../img/success_icon.svg';
import '../styles/Message.css';

export default class Message extends Component {
  render() {
    const { message, name, deleted } = this.props;
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
        {deleted ? 
        <h1 className="message-block__title__primary mt">Deleted</h1> :
        <h1 className="message-block__title__primary mt">Success!</h1>}
        
        <h2 className="message-block__title__secondary mt">{name}</h2>
        <p className="message-block__message">{message}</p>
        <button className="btn btn-success mt" onClick={this.props.close}>
          OK
        </button>
      </div>
    );
  }
}
