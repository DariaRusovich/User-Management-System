import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Employee from './Employee';

class EmployeesList extends Component {
  state = {
    employees: [],
  };
 

  async componentDidMount() {
    this.props.toggleLoader();
    const departmentId = this.props.match.params.id;
    const [employeesError, employees] =
      await apiRequest.getEmployeesByDepartmentId(departmentId);
    if (!employeesError) {
      this.setState({
        employees: employees.employees,
      });
      
    } else {
      this.props.setError(employeesError);
    }
    this.props.toggleLoader();
  }
  render() {
    const { employees } = this.state;
    if (!employees.length) {
      return (
        <section className="section">
          <div className="container">
            <h1 className="title-primary">
              No employees in the department.{' '}
              <Link className="title" to="/">
                {' '}
                Go back.
              </Link>
            </h1>
          </div>
        </section>
      );
    }
    return (
      <>
        <section className="section">
          <div className="container section-wrap">
            
              <h1 className="title-secondary">
                {employees.length} employees.{' '}
                <Link to="/" className="title">
                  Go back
                </Link>
              </h1>
            

            <div className="item-list">
              {employees.map((employee) => (
                <Employee key={employee._id} employee={employee} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(withError(withLoader(EmployeesList)));
