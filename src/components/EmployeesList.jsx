import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { getEmployeeByDepartmentId } from '../api/api';
import Employee from './Employee';
import Loader from './Loader';

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      employees: [],
      isLoading: false,
      error: null,
    };
  }

  async componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(async () => {
      const departmentId = this.props.match.params.id;
      const [employeesDataError, employeesData] =
        await getEmployeeByDepartmentId(departmentId);
      if (!employeesDataError) {
        this.setState({ employees: employeesData.employeeByDepartmentId });
      } else {
        this.setState({ error: employeesDataError });
      }
      this.setState({ isLoading: false });
    }, 500);
  }

  render() {
    const { employees, isLoading, error } = this.state;
    if (isLoading) {
      return <Loader></Loader>;
    }
    if (error) {
      return <h1>Error</h1>;
    }
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
