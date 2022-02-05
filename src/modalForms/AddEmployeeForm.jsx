import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import { withRouter } from 'react-router-dom';


class AddEmployeeForm extends Component {
  createNewEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: e.target.firstname.value.trim(),
      lastName: e.target.lastname.value.trim(),
      username: e.target.username.value.trim(),
      email: e.target.email.value.trim(),
      department: this.props.match.params.id,
      createdAt: Date.now(),
    };
    console.log(newEmployee);
    console.log(this.props.match.params.id);
    const [savedEmployeeError, savedEmployee] = await apiRequest.addEmployee(
      newEmployee
    );
    if (!savedEmployeeError) {
      alert('OK!');
      e.target.reset();
    }
  };
  render() {
    return (
      <form className="add-form form" onSubmit={this.createNewEmployee}>
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
export default withRouter(AddEmployeeForm);
