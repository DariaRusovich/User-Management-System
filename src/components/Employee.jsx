import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import '../styles/Employee.css';
import { AppContext } from '../contexts/AppContext';
import EditEmployeeForm from '../modalForms/EditEmployeeForm';
import Message from './Message';
import WarningMessage from './WarningMessage';

export default class Employee extends Component {
  deleteEmployee = async () => {
    const employeeId = this.props.employee._id;
    const [employeeDeletedError, employeeDeleted] =
      await apiRequest.deleteEmployee(employeeId);
    if (employeeDeleted) {
      this.showMessage();
      this.props.remove(employeeId);
    } else {
      this.showWarningMessage(employeeDeletedError.response.data.message);
      alert(employeeDeletedError.response.data.message);
    }
  };
  showWarningMessage = (message) => {
    this.context.handleOpenModal(
      <WarningMessage close={this.context.handleCloseModal} message={message} />
    );
  };

  showMessage = () => {
    this.context.handleOpenModal(
      <Message
        close={this.context.handleCloseModal}
        name={this.props.employee.username}
        message={'employee deleted'}
        deleted={true}
      />
    );
  };

  render() {
    const { employee, update } = this.props;
    const { username, firstName, lastName, email } = employee;
    const { handleOpenModal, handleCloseModal } = this.context;
    return (
      <div className="employee-item item-block">
        <img
          className="item__img"
          src="#"
          width="1"
          height="1"
          loading="lazy"
          alt="Avatar"
        />
        <div className="item-wrapper">
          <div className="item-title__wrapper">
            <h2 className="item__title">{firstName}</h2>
            <h2 className="item__title">{lastName}</h2>
          </div>
          <h3 className="item__title__secondary">{username}</h3>
        </div>
        <a href={`mailto:${email}`} className="item__email">
          {email}
        </a>
        <div className="btns-group">
          <button
            onClick={() =>
              handleOpenModal(
                <EditEmployeeForm
                  employee={employee}
                  close={handleCloseModal}
                  update={update}
                />
              )
            }
            className="btn btn-primary"
          >
            Edit
          </button>
          <button onClick={this.deleteEmployee} className="btn btn-danger">
            Delete
          </button>
        </div>
      </div>
    );
  }
}

Employee.contextType = AppContext;
