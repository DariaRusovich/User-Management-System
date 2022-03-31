import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import Message from '../components/Message';
import { AppContext } from '../contexts/AppContext';

export default class AddEmployeeForm extends Component {
  state = {
    invalidData: '',
    firstname: '',
    lastname: '',
    username: '',
    email: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  createNewEmployee = async (e) => {
    e.preventDefault();
    const newEmployee = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      department: this.props.id,
      createdAt: Date.now(),
    };
    const [savedEmployeeError, savedEmployee] = await apiRequest.addEmployee(
      newEmployee
    );
    if (savedEmployee) {
      this.props.close();
      this.showMessage();
      this.props.add(savedEmployee.employee);
    } else {
      this.setState({ invalidData: savedEmployeeError.response.data.message });
    }
  };
 
  showMessage = () => {
    this.context.handleOpenModal(
      <Message
        close={this.context.handleCloseModal}
        name={this.state.username}
        message={'employee added'}
      />
    );
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
            onChange={this.handleChange}
              type="text"
              name="firstname"
              placeholder="Employee first name"
              required
            />
          </div>
          <input
            onChange={this.handleChange}
            type="text"
            name="lastname"
            placeholder="Employee last name"
            required
          />
          <input
            onChange={this.handleChange}
            type="text"
            name="username"
            placeholder="Employee username"
            required
          />
          <input
            onChange={this.handleChange}
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

AddEmployeeForm.contextType = AppContext;
