import React, { Component } from 'react';
import { dateFormat } from '../utils/dateFormatter';

export default class Employee extends Component {
  render() {
    const { employee } = this.props;
    const {username, first_name, last_name, email, created_at} = employee
    return (
      <div className="employee-item">
        <img src="#" width="1" height="1" loading="lazy" alt="Avatar" />
        <h2 className="employee-item__title">{username}</h2>
        <h3 className="employee-item__title">{first_name}</h3>
        <h3 className="employee-item__title">{last_name}</h3>
        <p className="employee-item__email">{email}</p>
        <span className="employee-item__date">
          {dateFormat(created_at)}
        </span>
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
      </div>
    );
  }
}
