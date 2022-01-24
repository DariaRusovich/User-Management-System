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
        <h2 className="item__title">{username}</h2>
        <h3 className="item__title__secondary">{first_name}</h3>
        <h3 className="item__title__secondary">{last_name}</h3>
        <p className="item__email">{email}</p>
        <span className="item__date">{dateFormat(created_at)}</span>
        <div className="btns-group">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}
