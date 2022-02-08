import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';

export default class SortForm extends Component {
  getSort = async () => {
    const [sortedDepartmentError, sortedDepartment] =
      await apiRequest.getSortedDepartments();
    if (!sortedDepartmentError) {
      console.log(sortedDepartment);
    }
  };

  render() {
    return (
      <select onClick={this.getSort} name="">
        <option disabled value="">
          Sort by name
        </option>
        <option  value="">
          A-Z
        </option>
        <option value="">Z-A</option>
      </select>
    );
  }
}
