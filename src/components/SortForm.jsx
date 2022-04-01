import React, { Component } from 'react';
import departmentsApi from '../api/departmentsApi';

export default class SortForm extends Component {
  handleSort = async (e) => {
    const sortType = e.target.value;
    const [sortedDepartmentError, sortedDepartment] = await departmentsApi.get({ sort: sortType });
    if (sortedDepartment) {
      const departments = sortedDepartment.departments.departments;
      this.props.sort(departments);
    } else {
      alert(sortedDepartmentError.response.data.message);
    }
  };
  render() {
    return (
      <select className="sort-form" defaultValue={'Sort by name'} onChange={this.handleSort}>
        <option disabled value={'Sort by name'}>
          Sort by name
        </option>
        <option value="asc">A-Z</option>
        <option value="desc">Z-A</option>
      </select>
    );
  }
}
