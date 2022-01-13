import React, { Component } from 'react';
import { dateFormat } from '../utils/dateFormatter';

export default class Employee extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { employee } = this.props;
    return (
      <>
        {employee && (
          <div className="employee-item">
            <img src="#" width="1" height="1" loading="lazy" alt="Avatar" />
            <h2 className="employee-item__title">{employee.username}</h2>
            <h3 className="employee-item__title">{employee.first_name}</h3>
            <h3 className="employee-item__title">{employee.last_name}</h3>
            <p className="employee-item__email">{employee.email}</p>
            <span className="employee-item__date">{dateFormat(employee.created_at)}</span>
            {/* <span className='employee-item__date'>{employee.updated_at}</span> */}
            <button className="btn">Edit</button>
            <button className="btn">Delete</button>
          </div>
        )}
      </>
    );
  }
}
// id: uuid(),
//         username: "Employee4",
//         email: "Employee4@example.com",
//         first_name: "Employee",
//         last_name: "Employee4",
//         created_at: Date.now(),
//         update_at: Date.now(),
