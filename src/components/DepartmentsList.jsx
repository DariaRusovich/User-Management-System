import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Department from './Department';
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

  updateDepartment = (updatedDepartment, departmentId) => {
    const copiedState = this.state.departments;
    const departmentIdx = copiedState.findIndex(
      (department) => department._id === departmentId
    );
    if (departmentIdx !== -1) {
      copiedState.splice(departmentIdx, 1, updatedDepartment);
      this.setState({ departments: copiedState });
    }
  };

  render() {
    const { departments } = this.state;
    console.log(departments);
    const { handleOpenModal, handleCloseModal } = this.context;
    return (
      <section className="section">
        <div className="container section-wrap">
          <div className="container">
            <button
              onClick={() =>
                handleOpenModal(
                  <AddDepartmentForm
                    add={this.addNewDepartment}
                    close={handleCloseModal}
                  ></AddDepartmentForm>
                )
              }
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
                  update={this.updateDepartment}
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
      </section>
    );
  }
}

export default withError(withLoader(DepartmentsList));
DepartmentsList.contextType = ModalWindowContext;
