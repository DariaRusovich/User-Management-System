import React, { Component } from 'react';
import withValidation from '../HOC/withValidation';

class AddDepartmentForm extends Component {
  render() {
    const { close, inputDirty, handleChange } = this.props;
    console.log(this);
    return (
      <form className="add-form form">
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
            <button onClick={close} type="submit" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}
export default withValidation(AddDepartmentForm);
