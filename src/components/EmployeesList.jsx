import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getDepartmentById, getEmployeeByDepartmentId } from '../api/api';

import Employee from './Employee';
import Loader from './Loader';

class EmployeesList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: {},
      employees: [],
      isLoading: false,
      error: null,
    };
  }

  // async componentDidMount() {
  //   this.setState({ isLoading: true });
  //   setTimeout(async () => {
  //     const departmentId = this.props.match.params.id;
  //     const [employeesDataError, employeesData] =
  //       await getEmployeeByDepartmentId(departmentId);
  //       //console.log(employeesData);
  //     if (!employeesDataError) {
  //       this.setState({ employees: employeesData.employeeByDepartmentId });
  //     } else {
  //       this.setState({ error: employeesDataError });
  //     }
  //     this.setState({ isLoading: false });
  //   }, 500);
  // }

  async componentDidMount() {
    this.setState({ isLoading: true });
    setTimeout(async () => {
      const departmentId = this.props.match.params.id;
      const [departmentError, department] = await getDepartmentById(
        departmentId
      );
      console.log(department.departmentById);
      if (!departmentError) {
        this.setState({
          department: department.departmentById.name,
          employees: department.departmentById.employees,
        });
      } else {
        this.setState({ error: departmentError });
      }
      this.setState({ isLoading: false });
    }, 500);
  }
  render() {
    const { department, employees, isLoading, error } = this.state;
    console.log(department, employees);

    if (error) {
      return <h1>Error</h1>;
    }
    if (!employees) {
      return (
        <h2>
          No employees in the {department} department.
          <Link to="/"> Go back.</Link>
        </h2>
      );
    }
    if (isLoading) {
      return <Loader></Loader>;
    }
    return (
      <>
        <section className="section">
          <div className="container section-wrap">
            {employees && (
              <h2>
                {employees.length} employees in the {department} department
              </h2>
            )}
            <div className="employees-list">
              {employees &&
                employees.map((employee) => (
                  <Employee key={employee.id} employee={employee}></Employee>
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(EmployeesList);
