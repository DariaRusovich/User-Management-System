import React, { Component } from 'react';
import { apiRequest } from '../api/apiService';
import { ModalWindowContext } from '../contexts/ModalWindowContext';
import withError from '../HOC/withError';
import withLoader from '../HOC/withLoader';
import AddDepartmentForm from '../modalForms/AddDepartmentForm';
import Department from './Department';
import ModalWindow from './ModalWindow';

class DepartmentsList extends Component {
  state = {
    departments: [],
  };

  async componentDidMount() {
    this.props.toggleLoader();
    const [departmentsError, departments] = await apiRequest.getDepartments();
    if (!departmentsError) {
      this.setState({ departments: departments.departments.departments });
    } else {
      this.props.setError(departmentsError);
    }
    this.props.toggleLoader();
  }

  render() {
    const { departments } = this.state;
    const { visible, handleOpenModal, handleCloseModal } = this.context;
    return (
      <section className="section">
        <div className="container section-wrap">
          
            <button onClick={handleOpenModal} className="btn btn-success">
              + Add department
            </button>
         
          <div className="item-list">
            {departments &&
              departments.map((department) => (
                <Department key={department._id} department={department} />
              ))}
          </div>
          <ModalWindow visible={visible} setVisible={handleCloseModal}>
            <AddDepartmentForm></AddDepartmentForm>
          </ModalWindow>
        </div>
      </section>
    );
  }
}

export default withError(withLoader(DepartmentsList));
DepartmentsList.contextType = ModalWindowContext;
