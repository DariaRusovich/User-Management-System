import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { DEPARTMENT_BY_ID_URL, EMPLOYEES_URL } from '../constants/url';
import { dateFormat } from '../utils/dateFormatter';
import '../styles/Department.css';

class Department extends Component {
  render() {
    const { department } = this.props;
    const { name, description, created_at } = department;
    return (
      <div className="department-item">
        <img className="department-item__img" src="#" width="1" height="1" loading="lazy" alt="Avatar" />
        <h2 className="department-item__title title">{name}</h2>
        <p className="department-item__description">{description}</p>
        <span className="department-item__date">{dateFormat(created_at)}</span>
        {/* <span className='department-item__date'>{department.updated_at}</span> */}
        <div className="btns-group">
          <button className="btn btn-primary">Edit</button>
          <button className="btn btn-danger">Delete</button>
          <button className="btn btn-success">
            <Link
              to={`${DEPARTMENT_BY_ID_URL}${department.id}${EMPLOYEES_URL}`}
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
