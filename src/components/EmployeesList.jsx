import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Employee from './Employee';
import AddNewItemBtn from './AddNewItemBtn';


class EmployeesList extends Component {
  state = {
    departments: {},
    employees: [],
  };

  async componentDidMount() {
    this.props.toggleLoader();
    const departmentId = this.props.match.params.id;
    const [departmentError, department] = await apiRequest.getDepartmentById(
      departmentId
    );
    if (!departmentError) {
      this.setState({
        department: department.departmentById.name,
        employees: department.departmentById.employees,
      });
    } else {
      this.props.setError(departmentError);
    }
    this.props.toggleLoader();
  }
  render() {
    const { department, employees } = this.state;
    if (!employees) {
      return (
        <section className="section">
          <div className="container">
            <h1 className='title-primary'>
              No employees in the {department} department.
              {' '}<Link className='title' to="/"> Go back.</Link>
            </h1>
          </div>
        </section>
      );
    }
    return (
      <>
        <section className="section">
          <div className="container section-wrap">
            {
              <h2 className="title-secondary">
                {employees.length} employees in the{' '}
                <Link to="/" className="title">
                  {' '}
                  {department}
                </Link>{' '}
                department
              </h2>
            }
            <AddNewItemBtn>employee</AddNewItemBtn>
            <div className="item-list">
              {employees.map((employee) => (
                <Employee key={employee.id} employee={employee} />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(withError(withLoader(EmployeesList)));
