import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../api/apiService';

class EditDepartmentForm extends Component {
  state = {
    name: '',
    description: '',
    invalidData: '',
  };

  componentDidMount = async () => {
    const departmentId = this.props.department._id;
    const [departmenError, department] = await apiRequest.getDepartment(
      departmentId
    );
    if (!departmenError) {
      const { name, description } = department.departmentByID;
      this.setState({ name, description });
    } else {
      this.setState({invalidData: departmenError.response.data.message})
    }
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const departmentId = this.props.department._id;
    const updatedDepartment = {
      name: e.target.name.value.trim(),
      description: e.target.description.value.trim(),
      updatedAt: Date.now(),
    };
    const [savedUpdatedDepartmentError, savedUpdatedDepartment] =
      await apiRequest.updatedDepartment(departmentId, updatedDepartment);
    if (savedUpdatedDepartment) {
      this.props.close();
      this.props.update(
        savedUpdatedDepartment.updatedDescription,
        departmentId
      );
    } else {
      this.setState({
        invalidData: savedUpdatedDepartmentError.response.data.message,
      });
    }
  };

  render() {
    const { close } = this.props;
    const { name, description, invalidData } = this.state;
    return (
      <form
        className="add-form form"
        onSubmit={this.handleSubmit}
        onReset={close}
      >
        <fieldset>
          <legend>Edit department</legend>
          <div className="input-wrapper">
            <input
              onChange={(e) => this.setState({ name: e.target.value })}
              type="text"
              name="name"
              placeholder="Department name"
              value={name}
              disabled
              required
            />
            <div className="validation">*Required</div>
          </div>
          <textarea
            onChange={(e) => this.setState({ description: e.target.value })}
            type="text"
            name="description"
            placeholder="Department description"
            value={description}
            required
          ></textarea>
          {invalidData && <p className="warning-message">{invalidData}</p>}
          <div className="btns-wrap">
            <button type="submit" className="btn btn-success">
              Edit
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

export default withRouter(EditDepartmentForm);
