import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getEmployeeByDepartmentId } from '../api/api';
import Employee from './Employee';

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    const departmentId = this.props.match.params.id;
    const [employeesDataError, employeesData] = await getEmployeeByDepartmentId(
      departmentId
    );
    console.log(employeesDataError, employeesData);
    this.setState({ employees: employeesData.employeeByDepartmentId });
  }

  render() {
    const { employees } = this.state;
    console.log(employees);

    return (
      <>
        <section className="section">
          <div className="container section-wrap">
            {employees &&
              employees.map((employee) => (
                <Employee key={employee.id} employee={employee}></Employee>
              ))}
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(EmployeesList);
