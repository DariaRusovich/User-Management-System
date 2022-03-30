import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';

export default class AddEmployeeForm extends Component {
  state = {
    invalidData: '',
  };
  createNewEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: e.target.firstname.value.trim(),
      lastName: e.target.lastname.value.trim(),
      username: e.target.username.value.trim(),
      email: e.target.email.value.trim(),
      department: this.props.id,
      createdAt: Date.now(),
    };
    const [savedEmployeeError, savedEmployee] = await apiRequest.addEmployee(
      newEmployee
    );
    if (savedEmployee) {
      this.props.close();
      this.props.add(savedEmployee.employee);
    } else {
      this.setState({ invalidData: savedEmployeeError.response.data.message });
    }
  };
  render() {
    const { close } = this.props;
    const { invalidData } = this.state;
    return (
      <form
        className="add-form form"
        onReset={close}
        onSubmit={this.createNewEmployee}
      >
        <fieldset>
          <legend>Add employee</legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="firstname"
              placeholder="Employee first name"
              required
            />
          </div>
          <input
            type="text"
            name="lastname"
            placeholder="Employee last name"
            required
          />
          <input
            type="text"
            name="username"
            placeholder="Employee username"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Employee e-mail"
            required
          />
          {invalidData && <p className="warning-message">{invalidData}</p>}
          <div className="btns-wrap">
            <button type="submit" className="btn btn-success">
              Add employee
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
