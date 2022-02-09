import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';

export default class EditEmployeeForm extends Component {
  state = {
    email: '',
    firstName: '',
    lastName: '',
    username: '',
  };

  componentDidMount = async () => {
    const employeeId = this.props.employee._id;
    const [employeeError, employee] = await apiRequest.getEmployee(employeeId);
    if (employee) {
      const { email, firstName, lastName, username } = employee.employeeByID;
      this.setState({ email, firstName, lastName, username });
    } else {
      alert(employeeError.response.data.message);
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const employeeId = this.props.employee._id;
    const updatedEmployee = {
      firstName: e.target.firstname.value.trim(),
      lastName: e.target.lastname.value.trim(),
      username: e.target.username.value.trim(),
      email: e.target.email.value.trim(),
      updatedAt: Date.now(),
    };
    const [savedEmployeeError, savedEmployee] = await apiRequest.updateEmployee(
      employeeId,
      updatedEmployee
    );
    if (savedEmployee) {
      alert('OK!');
      e.target.reset();
      this.props.update(savedEmployee.updatedEmployee, employeeId);
    } else {
      alert(savedEmployeeError.response.data.message);
    }
  };

  render() {
    const { close } = this.props;
    const { firstName, lastName, username, email } = this.state;
    return (
      <form
        className="add-form form"
        onReset={close}
        onSubmit={this.handleSubmit}
      >
        <fieldset>
          <legend>Edit employee</legend>
          <div className="input-wrapper">
            <input
              onChange={(e) => this.setState({ firstName: e.target.value })}
              type="text"
              name="firstname"
              placeholder="Employee first name"
              value={firstName}
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <input
              onChange={(e) => this.setState({ lastName: e.target.value })}
              type="text"
              name="lastname"
              placeholder="Employee last name"
              value={lastName}
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <input
              onChange={(e) => this.setState({ username: e.target.value })}
              type="text"
              name="username"
              placeholder="Employee username"
              value={username}
              disabled
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <input
              onChange={(e) => this.setState({ email: e.target.value })}
              type="email"
              name="email"
              placeholder="Employee e-mail"
              value={email}
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="btns-wrap">
            <button type="submit" className="btn btn-success">
              Edit employee
            </button>
            <button type="reset" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
