import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import Department from './Department';

class DepartmentsList extends Component {
  state = {
    departments: [],
  };

  async componentDidMount() {
    this.props.toggleLoader();
    const [departmentsError, departments] = await apiRequest.getDepartments();
    if (!departmentsError) {
      this.setState({ departments: departments.departments });
    } else {
      this.props.setError(departmentsError);
    }
    this.props.toggleLoader();
  }

  render() {
    const { departments } = this.state;
    return (
      <section className="section">
        <div className="container section-wrap">
          {departments &&
            departments.map((department) => (
              <Department key={department.id} department={department} />
            ))}
        </div>
      </section>
    );
  }
}

export default withError(withLoader(DepartmentsList));
