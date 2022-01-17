import React, { Component } from 'react';
import { getDepartments } from '../api/api';
import Department from './Department';
import Loader from './Loader';

export default class DepartmentsList extends Component {
  state = {
    departments: [],
    isLoading: false,
    error: null,
  };

  async componentDidMount() {
    this.setState({ isLoading: true });
    const [departmentsError, departments] = await getDepartments();
    if (!departmentsError) {
      this.setState({ departments: departments.departments });
    } else {
      this.setState({ error: departmentsError });
    }
    this.setState({ isLoading: false });
  }

  render() {
    const { departments, isLoading, error } = this.state;
    //console.log(departments);

    if (isLoading) {
      return <Loader />;
    }
    if (error) {
      return <h1>Error</h1>;
    }

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
