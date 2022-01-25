import React, { Component } from 'react';
import { dateFormat } from '../utils/dateFormatter';
import '../styles/Employee.css';

export default class Employee extends Component {
  render() {
    const { employee } = this.props;
    const { username, first_name, last_name, email, created_at } = employee;
    return (
      <div className="employee-item">
        <img
          className="item__img"
          src="#"
          width="1"
          height="1"
          loading="lazy"
          alt="Avatar"
        />
        <div className='item-wrapper'>
          <div className='item-title__wrapper'>
          <h2 className="item__title">{first_name}</h2>
          <h2 className="item__title">{last_name}</h2>
          </div>
          <h3 className="item__title__secondary">{username}</h3>
        </div>
        <a href={`mailto:${email}`} className="item__email">
          {email}
        </a>
        <span className="item__date">{dateFormat(created_at)}</span>
        <div className="btns-group">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}
