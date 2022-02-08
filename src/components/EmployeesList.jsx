import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import { AppContext } from '../contexts/AppContext';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import AddEmployeeForm from '../modalForms/AddEmployeeForm';
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

  addNewEmployee = (newEmployee) => {
    this.setState((prev) => ({ employees: [...prev.employees, newEmployee] }));
  };
  removeEmployee = (employeeId) => {
    this.setState((prev) => ({
      employees: prev.employees.filter((emloyee) => emloyee._id !== employeeId),
    }));
  };
  updateEmployee = (updatedDepartment, employeeId) => {
    const copiedState = this.state.employees;
    const employeeIdx = copiedState.findIndex(
      (employee) => employee._id === employeeId
    );
    if (employeeIdx !== -1) {
      copiedState.splice(employeeIdx, 1, updatedDepartment);
      this.setState({ employees: copiedState });
    }
  };
  render() {
    const { employees } = this.state;
    const { handleOpenModal, handleCloseModal } = this.context;
    const departmentId = this.props.match.params.id;
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
           <div className="wrapper">
           <button
              onClick={() =>
                handleOpenModal(
                  <AddEmployeeForm
                    id={departmentId}
                    close={handleCloseModal}
                    add={this.addNewEmployee}
                  ></AddEmployeeForm>
                )
              }
              className="btn btn-success"
            >
              + Add employee
            </button>
           </div>
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
            <div className="wrapper">
              <button
                onClick={() =>
                  handleOpenModal(
                    <AddEmployeeForm
                      id={departmentId}
                      close={handleCloseModal}
                      add={this.addNewEmployee}
                    ></AddEmployeeForm>
                  )
                }
                className="btn btn-success"
              >
                + Add employee
              </button>
            </div>
            <div className="item-list">
              {employees.map((employee) => (
                <Employee
                  key={employee._id}
                  remove={this.removeEmployee}
                  update={this.updateEmployee}
                  employee={employee}
                />
              ))}
            </div>
          </div>
        </section>
      </>
    );
  }
}

export default withRouter(withError(withLoader(EmployeesList)));

EmployeesList.contextType = AppContext;
