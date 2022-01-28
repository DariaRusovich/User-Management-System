import React, { Component } from 'react';

export default class AddDepartmentForm extends Component {
  render() {
    const {setVisible} = this.props
    return (
      <form className="add-form form">
        <fieldset>
          <legend>Add department</legend>
          <input
            type="text"
            name="title"
            placeholder="Department name"
            required
          />
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
            <button onClick={setVisible} type="submit" className="btn btn-danger">
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    );
  }
}