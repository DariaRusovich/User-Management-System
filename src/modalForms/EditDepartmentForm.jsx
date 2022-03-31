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
      this.setState({ invalidData: departmenError.response.data.message });
    }
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    const departmentId = this.props.department._id;
    const updatedDepartment = {
      name: this.state.name,
      description: this.state.description,
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
              onChange={this.handleChange}
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
            onChange={this.handleChange}
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
