import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getDepartment } from '../api/api';
import Employee from './Employee';

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      department: [],
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const departmentId = this.props.match.params.id;
    const [dataError, data] = await getDepartment(departmentId);
    console.log(dataError, data);
    this.setState({ department: data.departmentById.employees });
  }

  render() {
    const { department } = this.state;
    console.log(department);
    return (
      <>
        {department &&
          department.map((employee) => (
            <Employee key={employee.id} employee={employee}></Employee>
          ))}
      </>
    );
  }
}

export default withRouter(EmployeesList);
