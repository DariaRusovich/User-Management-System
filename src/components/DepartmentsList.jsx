import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Department from './Department';

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
    this.setState((prev) => ({page: (prev.page + 1)}))
  };


  render() {
    const { departments } = this.state;
    return (
      <section className="section">
        <div className="container section-wrap">
          <div className="item-list">
            {departments &&
              departments.map((department) => (
                <Department key={department._id} department={department} />
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
