import React, { Component } from 'react';
import Message from '../components/Message';
import { AppContext } from '../contexts/AppContext';
import  employeesApi  from '../api/employeesApi';

export default class EditEmployeeForm extends Component {
  state = {
    email: '',
    firstname: '',
    lastname: '',
    username: '',
    invalidData: '',
  };

  componentDidMount = async () => {
    const employeeId = this.props.employee._id;
    const [employeeError, employee] = await employeesApi.getOne(employeeId);
    if (employee) {
      const { email, firstName, lastName, username } = employee.employeeByID;
      this.setState({
        email,
        firstname: firstName,
        lastname: lastName,
        username,
      });
    } else {
      this.setState({ invalidData: employeeError.response.data.message });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const employeeId = this.props.employee._id;
    const updatedEmployee = {
      firstName: this.state.firstname,
      lastName: this.state.lastname,
      username: this.state.username,
      email: this.state.email,
      updatedAt: Date.now(),
    };
    const [savedEmployeeError, savedEmployee] = await employeesApi.update(
      employeeId,
      updatedEmployee
    );
    if (savedEmployee) {
      this.props.close();
      this.showMessage();
      this.props.update(savedEmployee.updatedEmployee);
    } else {
      this.setState({ invalidData: savedEmployeeError.response.data.message });
    }
  };

  showMessage = () => {
    this.context.handleOpenModal(
      <Message
        close={this.context.handleCloseModal}
        name={this.state.username}
        message={'employee edited'}
      />
    );
  };

  render() {
    const { close } = this.props;
    const { firstname, lastname, username, email, invalidData } = this.state;
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
              onChange={this.handleChange}
              type="text"
              name="firstname"
              placeholder="Employee first name"
              value={firstname}
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <input
              onChange={this.handleChange}
              type="text"
              name="lastname"
              placeholder="Employee last name"
              value={lastname}
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <input
              onChange={this.handleChange}
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
              onChange={this.handleChange}
              type="email"
              name="email"
              placeholder="Employee e-mail"
              value={email}
              required
            />
            <div className="validation">*Required</div>
          </div>
          {invalidData && <p className="warning-message">{invalidData}</p>}
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

EditEmployeeForm.contextType = AppContext;
