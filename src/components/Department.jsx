import React, { Component } from 'react';

export default class Department extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { department } = this.props;
    return (
      <div className="department-item">
        <img src="#" width="1" height="1" loading="lazy" alt="Avatar" />
        <h2 className="department-item__title">{department.name}</h2>
        <p className="department-item__description">{department.description}</p>
        <span className="department-item__date">{department.created_at}</span>
        {/* <span className='department-item__date'>{department.updated_at}</span> */}
        <button className="btn">Edit</button>
        <button className="btn">Delete</button>
        <button className="btn">Employees</button>
      </div>
    );
  }
}
