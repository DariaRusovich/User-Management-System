import React, { Component } from 'react';
import '../styles/Employee.css';

export default class Employee extends Component {
  render() {
    const { employee } = this.props;
    const { username, firstName, lastName, email, createdAt } = employee;
    return (
      <div className="employee-item item-block">
        <img
          className="item__img"
          src="#"
          width="1"
          height="1"
          loading="lazy"
          alt="Avatar"
        />
        <div className="item-wrapper">
          <div className="item-title__wrapper">
            <h2 className="item__title">{firstName}</h2>
            <h2 className="item__title">{lastName}</h2>
          </div>
          <h3 className="item__title__secondary">{username}</h3>
        </div>
        <a href={`mailto:${email}`} className="item__email">
          {email}
        </a>
        <div className="btns-group">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
        </div>
      </div>
    );
  }
}
