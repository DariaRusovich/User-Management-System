import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import { DEPARTMENT_BY_ID_URL, EMPLOYEES_URL } from '../constants/url';
import { AppContext } from '../contexts/AppContext';

import EditDepartmentForm from '../modalForms/EditDepartmentForm';
import '../styles/Department.css';

class Department extends Component {
  deleteDeprtment = async () => {
    const departmentId = this.props.department._id;
    const [departmentDeletedError, departmentDeleted] =
      await apiRequest.deleteDepartment(departmentId);
    if (departmentDeleted) {
      this.props.remove(departmentId);
      alert('OK!');
    } else {
      alert(departmentDeletedError.response.data.message);
    }
  };

  render() {
    const { department, update } = this.props;
    const { name, description, picture } = department;
    const { handleOpenModal, handleCloseModal } = this.context;
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
            <button
              onClick={() =>
                handleOpenModal(
                  <EditDepartmentForm
                    update={update}
                    close={handleCloseModal}
                    department={department}
                  />
                )
              }
              className="btn btn-primary"
            >
              Edit
            </button>
            <button onClick={this.deleteDeprtment} className="btn btn-danger">
              Delete
            </button>
            <button className="btn btn-success">
              <Link
                to={`${DEPARTMENT_BY_ID_URL}${department._id}${EMPLOYEES_URL}`}
              >
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
