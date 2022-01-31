import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { DEPARTMENT_BY_ID_URL, EMPLOYEES_URL } from '../constants/url';

import '../styles/Department.css';

class Department extends Component {
  render() {
    const { department } = this.props;
    const { name, description, picture } = department;
    return (
      <div className="department-item item-block">
        <img className="item__img" src={picture} width="1" height="1" loading="lazy" alt="Avatar" />
        <h2 className="department-item__title item__title title">{name}</h2>
        <p className="department-item__description">{description}</p>
        <div className="btns-group">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-success">
            <Link
              to={`${DEPARTMENT_BY_ID_URL}${department._id}${EMPLOYEES_URL}`}
            >
              Employees
            </Link>
          </button>
        </div>
      </div>
    );
  }
}

export default withRouter(Department);
