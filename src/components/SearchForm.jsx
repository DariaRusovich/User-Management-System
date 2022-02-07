import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';

export default class SearchForm extends Component {
  state = {
    searchValue: '',
  };

  handleSearch = async (e) => {
    e.preventDefault();
    const searchValue = this.state.searchValue;
    const [searchDeprtmentsError, searchDepartments] =
      await apiRequest.getSearchingDepartment(searchValue);
      const departments = searchDepartments.departments.departments
    if (searchDepartments) {
      this.props.search(departments)
    } else {
      alert(searchDeprtmentsError.response.data.message)
    }
  };

  render() {
    const { searchValue } = this.state;
    return (
      <form className="search-form" onSubmit={this.handleSearch}>
        <input
          value={searchValue}
          onChange={(e) => this.setState({ searchValue: e.target.value })}
          name="search"
          type="text"
          placeholder="Search..."
          required
        />
        <button className="btn btn-success">Search</button>
      </form>
    );
  }
}
