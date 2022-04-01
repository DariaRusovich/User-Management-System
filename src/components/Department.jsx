import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { DEPARTMENTS_URL, EMPLOYEES_URL } from '../constants/url';
import { AppContext } from '../contexts/AppContext';
import EditDepartmentForm from '../modalForms/EditDepartmentForm';
import '../styles/Department.scss';
import Message from './Message';
import WarningMessage from './WarningMessage';
import departmentsApi from '../api/departmentsApi';

class Department extends Component {
  deleteDepartment = async () => {
    const departmentId = this.props.department._id;
    const [departmentDeletedError, departmentDeleted] =
      await departmentsApi.delete(departmentId);
    if (departmentDeleted) {
      this.showMessage();
      this.props.remove(departmentId);
    } else {
      this.showWarningMessage(departmentDeletedError.response.data.message);
    }
  };

  openModal = () => {
    this.context.handleOpenModal(
      <EditDepartmentForm
        update={this.props.update}
        close={this.context.handleCloseModal}
        department={this.props.department}
      />
    );
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
        name={this.props.department.name}
        message={'department deleted'}
        deleted={true}
      />
    );
  };

  render() {
    const { department } = this.props;
    const { name, description, picture } = department;
    return (
      <>
        <div className="department-item item-block">
          <img
            className="item__img"
            src={picture}
            width="1"
            height="1"
            loading="lazy"
            alt="Avatar"
          />
          <h2 className="department-item__title item__title title">{name}</h2>
          <p className="department-item__description">{description}</p>
          <div className="btns-group">
            <button onClick={this.openModal} className="btn btn-primary">
              Edit
            </button>
            <button onClick={this.deleteDepartment} className="btn btn-danger">
              Delete
            </button>
            <button className="btn btn-success">
              <Link to={`${DEPARTMENTS_URL}/${department._id}${EMPLOYEES_URL}`}>
                Employees
              </Link>
            </button>
          </div>
        </div>
      </>
    );
  }
}

export default withRouter(Department);
Department.contextType = AppContext;
