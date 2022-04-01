import React, { Component } from 'react';
import { debounce } from '../utils/debounce';
import departmentsApi from '../api/departmentsApi';

export default class SearchForm extends Component {
  state = {
    searchValue: '',
  };

  handleChange = debounce((event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }, 250);

  handleSearch = async (event) => {
    event.preventDefault();
    const searchValue = this.state.search;
    const [searchDeprtmentsError, searchDepartments] = await departmentsApi.get({ q: searchValue });
    const departments = searchDepartments.departments.departments;
    if (searchDepartments) {
      this.props.search(departments);
    } else {
      alert(searchDeprtmentsError.response.data.message);
    }
  };

  render() {
    return (
      <form className="search-form" onSubmit={this.handleSearchDebounce}>
        <input onChange={this.handleChange} name="search" type="text" placeholder="Search..." required />
        <button className="btn btn-success">Search</button>
      </form>
    );
  }
}
