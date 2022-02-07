import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';

export default class AddDepartmentForm extends Component {

  createNewDepartment = async (e) => {
    e.preventDefault();
    const newDepartment = {
      name: e.target.name.value.trim(),
      description: e.target.description.value.trim(),
      createdAt: Date.now(),
    };
    const [savedDepartmentError, savedDepartment] =
      await apiRequest.addDepartment(newDepartment);
    if (savedDepartment) {
      this.props.add(savedDepartment.department);
      alert('OK!');
      e.target.reset();
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
              placeholder="Department name"
              required
            />
            <div className="validation">*Required</div>
          </div>
          <div className="input-wrapper">
            <textarea
              type="text"
              name="description"
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
