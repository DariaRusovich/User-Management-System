import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { DEPARTMENT_BY_ID_URL, EMPLOYEES_URL } from '../constants/url';
import { dateFormat } from '../utils/dateFormatter';

class Department extends Component {
  render() {
    const { department } = this.props;
    const { name, description, created_at } = department;
    return (
      <div className="department-item">
        <img src="#" width="1" height="1" loading="lazy" alt="Avatar" />
        <h2 className="department-item__title">{name}</h2>
        <p className="department-item__description">{description}</p>
        <span className="department-item__date">{dateFormat(created_at)}</span>
        {/* <span className='department-item__date'>{department.updated_at}</span> */}
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
        <Link to={`${DEPARTMENT_BY_ID_URL}${department.id}${EMPLOYEES_URL}`}>
          <button className="btn">Employees</button>
        </Link>
      </div>
    );
  }
}

export default withRouter(Department);
