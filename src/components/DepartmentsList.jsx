import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Department from './Department';
import AddDepartmentForm from '../modalForms/AddDepartmentForm';
import { AppContext } from '../contexts/AppContext';
import SearchForm from './SearchForm';
import SortForm from './SortForm';

class DepartmentsList extends Component {
  state = {
    departments: [],
    limit: 10,
    currentPage: 1,
    lastPage: 1,
    total: 0,
  };

  getDepartments = async () => {
    this.props.toggleLoader();
    const { limit, currentPage } = this.state;
    const [departmentsError, departments] = await apiRequest.getDepartments(
      limit,
      currentPage
    );
    if (!departmentsError) {
      const { limit, currentPage, total } = departments.departments.results;
      this.setState({
        departments: departments.departments.departments,
        limit,
        currentPage,
        total,
        lastPage: Math.ceil(total / limit),
      });
    } else {
      this.props.setError(departmentsError);
    }
    this.props.toggleLoader();
  };

  componentDidMount() {
    this.getDepartments();
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.currentPage !== prevState.currentPage) {
      this.getDepartments();
      window.scroll(0, 0)
    }
  }

  handlePagination = (direction) => {
    this.setState((prev) => ({ currentPage: prev.currentPage + direction }));
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
    const department = copiedState.filter(
      (department) => department._id !== departmentId
    );
    if (department) {
      copiedState.splice(department, 1, updatedDepartment);
      this.setState({ departments: copiedState });
    }
  };

  searchDepartment = (searchDepartments) => {
    this.setState({ departments: searchDepartments });
  };

  sortDepartments = (sortedDepartments) => {
    this.setState({ departments: sortedDepartments });
  };

  render() {
    const { departments, lastPage, currentPage } = this.state;
    const { handleOpenModal, handleCloseModal } = this.context;
    return (
      <section className="section">
        <div className="container section-wrap">
          <div className="wrapper">
            <button
              onClick={() =>
                handleOpenModal(
                  <AddDepartmentForm
                    add={this.addNewDepartment}
                    close={handleCloseModal}
                  ></AddDepartmentForm>
                )
              }
              className="btn btn-success"
            >
              + Add department
            </button>
            <div className="form-wrap">
              <SortForm sort={this.sortDepartments} />
              <SearchForm search={this.searchDepartment} />
            </div>
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
          {departments.length ? (
            <>
              <span className='current-page'>Page: {currentPage}</span>
              <div className="btn-wrap">
                {currentPage > 1 && (
                  <button
                    onClick={() => this.handlePagination(-1)}
                    className="btn btn-primary btn-block"
                  >
                    Previous page
                  </button>
                )}
                {currentPage < lastPage && (
                  <button
                    onClick={() => this.handlePagination(1)}
                    className="btn btn-primary btn-block"
                  >
                    Next page
                  </button>
                )}
              </div>
            </>
          ) : (
            null
          )}
        </div>
      </section>
    );
  }
}

export default withError(withLoader(DepartmentsList));
DepartmentsList.contextType = AppContext;
