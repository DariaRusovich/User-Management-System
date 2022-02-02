import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import withValidation from '../HOC/withValidation';

class AddDepartmentForm extends Component {
  state = {
    department: {},
  };

  createNewDepartment = async (e) => {
    e.preventDefault();
    const newDepartment = {
      name: e.target.name.value.trim(),
      description: e.target.description.value.trim(),
      createdAt: Date.now(),
    };
    console.log(newDepartment);
    const [savedDepartmentError, savedDepartment] =
      await apiRequest.addDepartment(newDepartment);
      if (!savedDepartmentError) {
      alert('OK!')
      e.target.reset()
      }
  };
  

  render() {
    const { inputDirty, handleChange } = this.props;
    return (
      <form className="add-form form" onSubmit={this.createNewDepartment}>
        <fieldset>
          <legend>Add department</legend>
          <div className="input-wrapper">
            <input
              onChange={handleChange}
              type="text"
              name="name"
              placeholder="Department name"
              required
            />
            {inputDirty && <div className="validation">*Required</div>}
          </div>
          <textarea
            type="text"
            name="description"
            placeholder="Department description"
            required
          ></textarea>
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
export default withValidation(AddDepartmentForm);
