import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { apiRequest } from '../api/apiService';

class EditDepartment extends Component {
  state = {
    name: '',
    description: '',
  };

  // componentDidMount = () => {
  //   const { name, description } = this.props.department;
  //   this.setState({ name, description });
  // };

  componentDidMount = async () => {
    const departmentId = this.props.department._id;
    const [departmenError, department] = await apiRequest.getDepartment(
      departmentId
    );
    if (!departmenError) {
      console.log(department);
      const { name, description } = department.departmentByID;
      this.setState({ name, description });
    } else {
      alert('Error');
    }
  };

  render() {
    const { close } = this.props;
    const { name, description } = this.state;
    return (
      <form className="add-form form" onReset={close}>
        <fieldset>
          <legend>Edit department</legend>
          <div className="input-wrapper">
            <input
              onChange={(e) => this.setState({name: e.target.value})}
              type="text"
              name="name"
              placeholder="Department name"
              value={name}
              required
            />
            <div className="validation">*Required</div>
          </div>
          <textarea
            onChange={(e) => this.setState({description: e.target.value})}
            type="text"
            name="description"
            placeholder="Department description"
            value={description}
            required
          ></textarea>
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

export default withRouter(EditDepartment);
