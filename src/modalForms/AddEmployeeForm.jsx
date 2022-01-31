import React, { Component } from 'react';
import withValidation from '../HOC/withValidation';

class AddEmployeeForm extends Component {
  render() {
    const { close } = this.props;
    return (
      <form className="add-form form">
        <fieldset>
          <legend>Add employee</legend>
          <input
            type="text"
            name="firstname"
            placeholder="Employee first name"
            required
          />
          <input
            type="text"
            name="lastname"
            placeholder="Employee last name"
            required
          />
          <input name="username" placeholder="Employee username" required />
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
            <button onClick={close} type="submit" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default withValidation(AddEmployeeForm);
