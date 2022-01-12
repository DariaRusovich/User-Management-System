import React, { Component } from 'react';
import { getDepartments } from '../api/api';
import Department from './Department';

export default class DepartmentsList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      departments: [],
      isLoading: false,
      error: null,
    };
  }
  async componentDidMount() {
    this.setState({ isLoading: true });
    const [departmentsError, departments] = await getDepartments();
    //console.log(departmentsError, departments);
    this.setState({ departments: departments.departments });
  }

  render() {
    const { departments, isLoading, error } = this.state;
    console.log(departments);
    if (isLoading) {
      <h1>Loading...</h1>;
    }
    if (error) {
      <h1>Error</h1>;
    }

    return (
      <section className="section">
        <div className="container section-wrap">
          {departments.map((department) => (
            <Department key={department.id} department={department} />
          ))}
        </div>
      </section>
    );
  }
}
