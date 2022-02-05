import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Department from './Department';
import ModalWindow from './ModalWindow';
import AddDepartmentForm from '../modalForms/AddDepartmentForm';
import { ModalWindowContext } from '../contexts/ModalWindowContext';

class DepartmentsList extends Component {
  state = {
    departments: [],
    limit: 10,
    page: 1,
    total: 0,
  };

  async componentDidMount() {
    this.props.toggleLoader();
    const { limit, page } = this.state;
    const [departmentsError, departments] = await apiRequest.getDepartments(
      limit,
      page
    );
    if (!departmentsError) {
      this.setState({ departments: departments.departments.departments });
    } else {
      this.props.setError(departmentsError);
    }
    this.props.toggleLoader();
  }

  handlePagination = () => {
    this.setState((prev) => ({ page: prev.page + 1 }));
  };
  addNewDepartment = (newDepartment) => {
    this.setState((prev) => ({
      departments: [...prev.departments, newDepartment],
    }));
  };
  removeDepartment = (departmentId) => {
    this.setState((prev) => ({
      departments: prev.departments.filter(
        (department) => department._id !== departmentId
      ),
    }));
  };

  render() {
    const { departments } = this.state;
    const { open, handleOpenModal, handleCloseModal } = this.context;
    return (
      <section className="section">
        <div className="container section-wrap">
          <div className="container">
            <button
              onClick={handleOpenModal}
              className="btn btn-success btn-block"
            >
              + Add department
            </button>
          </div>
          <div className="item-list">
            {departments &&
              departments.map((department) => (
                <Department
                  key={department._id}
                  remove={this.removeDepartment}
                  department={department}
                />
              ))}
          </div>
          <div className="btn-wrap">
            <button
              onClick={this.handlePagination}
              className="btn btn-primary btn-block"
            >
              See more
            </button>
          </div>
        </div>
        <ModalWindow open={open} close={handleCloseModal}>
          <AddDepartmentForm
            add={this.addNewDepartment}
            close={handleCloseModal}
          ></AddDepartmentForm>
        </ModalWindow>
      </section>
    );
  }
}

export default withError(withLoader(DepartmentsList));
//DepartmentsList.contextType = ModalWindowContext;
