import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { getDepartmentById } from '../api/api';
import withLoader from '../HOC/withLoader';
import Employee from './Employee';

class EmployeesList extends Component {
  state = {
    departments: {},
    employees: [],
    error: null,
  };

  async componentDidMount() {
    this.props.handleToggleLoader();
    const departmentId = this.props.match.params.id;
    const [departmentError, department] = await getDepartmentById(departmentId);
    if (!departmentError) {
      this.setState({
        department: department.departmentById.name,
        employees: department.departmentById.employees,
      });
    } else {
      this.setState({ error: departmentError });
    }
    this.props.handleToggleLoader();
  }
  render() {
    const { department, employees, error } = this.state;
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
                  <Employee key={employee.id} employee={employee} />
                ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(withLoader(EmployeesList));
