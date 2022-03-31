import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import Message from '../components/Message';
import { AppContext } from '../contexts/AppContext';

class AddDepartmentForm extends Component {
  state = {
    name: '',
    description: '',
    createdAt: null,
    invalidData: '',
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

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
      this.props.close();
      this.props.add(savedDepartment.department);
      this.showMessage();
    } else {
      this.setState({
        invalidData: savedDepartmentError.response.data.message,
      });
    }
  };

  showMessage = () => {
    this.context.handleOpenModal(
      <Message
        close={this.context.handleCloseModal}
        name={this.state.name}
        title={'department'}
        message={'added'}
      />
    );
  };
  
  render() {
    const { close } = this.props;
    const { invalidData } = this.state;
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
          {invalidData && <p className="warning-message">{invalidData}</p>}
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

export default AddDepartmentForm;

AddDepartmentForm.contextType = AppContext;
