import React, { Component } from 'react';
import { getDepartments } from '../api/api';
import withLoader from '../HOC/withLoader';
import Department from './Department';

class DepartmentsList extends Component {
  state = {
    departments: [],
    error: null,
  };

  async componentDidMount() {
    this.props.handleToggleLoader();
    const [departmentsError, departments] = await getDepartments();
    if (!departmentsError) {
      this.setState({ departments: departments.departments });
    } else {
      this.setState({ error: departmentsError });
    }
    this.props.handleToggleLoader();
  }

  render() {
    const { departments, error } = this.state;
    if (error) {
      return <h1>Error</h1>;
    }

    return (
      <section className="section">
        <div className="container section-wrap">
          {departments &&
            departments.map((department) => (
              <Department
                key={department.id}
                department={department}
              ></Department>
            ))}
        </div>
      </section>
    );
  }
}

export default withLoader(DepartmentsList);
