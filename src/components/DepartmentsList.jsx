import React, { Component } from 'react';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Department from './Department';
import AddDepartmentForm from '../modalForms/AddDepartmentForm';
import { AppContext } from '../contexts/AppContext';
import SearchForm from './SearchForm';
import SortForm from './SortForm';
import departmentsApi from '../api/departmentsApi';

class DepartmentsList extends Component {
  state = {
    departments: [],
    limit: 10,
    currentPage: 1,
    lastPage: 1,
    total: 0,
  };

  getDepartments = async (page) => {
    this.props.toggleLoader();
    const { limit, currentPage } = this.state;
    const [departmentsError, departments] = await departmentsApi.get({
      limit,
      page: page || currentPage,
    });
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

  nextPage() {
    this.goToPage(this.state.currentPage + 1);
  }

  previousPage() {
    this.goToPage(this.state.currentPage - 1);
  }

  goToPage(page) {
    this.setState({ currentPage: page });
    this.onPageChange(page);
  }

  onPageChange(page) {
    this.getDepartments(page);
    window.scroll(0, 0);
  }

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

  updateDepartment = (updatedDepartment) => {
    const copiedState = this.state.departments;
    const updatedDepartments = copiedState.map((department) =>
      department._id === updatedDepartment._id ? updatedDepartment : department
    );
    this.setState({ departments: updatedDepartments });
  };

  searchDepartment = (searchDepartments) => {
    this.setState({ departments: searchDepartments });
  };

  sortDepartments = (sortedDepartments) => {
    this.setState({ departments: sortedDepartments });
  };

  openModal = () => {
    this.context.handleOpenModal(
      <AddDepartmentForm
        add={this.addNewDepartment}
        close={this.context.handleCloseModal}
      />
    );
  };

  render() {
    const { departments, lastPage, currentPage } = this.state;
    return (
      <section className="section">
        <div className="container section-wrap">
          <div className="wrapper">
            <button onClick={this.openModal} className="btn btn-success">
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
              <span className="current-page">Page: {currentPage}</span>
              <div className="btn-wrap">
                {currentPage > 1 && (
                  <button
                    onClick={() => this.previousPage()}
                    className="btn btn-primary btn-block"
                  >
                    Previous page
                  </button>
                )}
                {currentPage < lastPage && (
                  <button
                    onClick={() => this.nextPage()}
                    className="btn btn-primary btn-block"
                  >
                    Next page
                  </button>
                )}
              </div>
            </>
          ) : null}
        </div>
      </section>
    );
  }
}

export default withError(withLoader(DepartmentsList));
DepartmentsList.contextType = AppContext;
