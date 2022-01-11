import React, { Component } from 'react';
import { getDepartments } from '../api/api';
import Department from './Department';



export default class DepartmentsList extends Component {
  constructor(props){
    super(props)
    this.state = {
      departments: [],
      isLoading: false,
      error: null
    }
  }
  async componentDidMount() {
    this.setState({isLoading: true})
    const [departmentsError, departments] = await getDepartments()
    console.log(departmentsError, departments);
    this.setState({departments: departments.departments})
  }




  render() {
    const {departments, isLoading, error} = this.state
    return (
      <>
     <Department ></Department>
      </>
    );
  }
}
