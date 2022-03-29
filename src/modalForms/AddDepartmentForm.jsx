import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';

export default class AddDepartmentForm extends Component {
  state = {
    name: '',
    description: '',
    createdAt: null,
  };

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
}
  createNewDepartment = async (e) => {
    e.preventDefault();
    const newDepartment = {
      name: this.state.name,
      description: this.state.description,
      createdAt: Date.now(),
    };
    const [savedDepartmentError, savedDepartment] =
      await apiRequest.addDepartment(newDepartment);
    if (savedDepartment) {
      alert('OK!');
      this.props.close();
      this.props.add(savedDepartment.department);
    } else {
      alert(savedDepartmentError.response.data.message);
    }
  };

  render() {
    const { close } = this.props;
    return (
      <form
        className="add-form form"
        onSubmit={this.createNewDepartment}
        onReset={close}
      >
        <fieldset>
          <legend>Add department</legend>
          <div className="input-wrapper">
            <input
              type="text"
              name="name"
              onChange={this.handleChange}
              placeholder="Department name"
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <textarea
              type="text"
              name="description"
              onChange={this.handleChange}
              placeholder="Department description"
              required
            ></textarea>
            <div className="validation">*Required</div>
          </div>
          <div className="btns-wrap">
            <button type="submit" className="btn btn-success">
              Add department
            </button>
            <button type="reset" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
