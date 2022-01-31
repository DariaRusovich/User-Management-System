import React, { Component } from 'react';
import EmployeesList from '../components/EmployeesList';
import ModalWindow from '../components/ModalWindow';
import { ModalWindowContext } from '../contexts/ModalWindowContext';
import AddEmployeeForm from '../modalForms/AddEmployeeForm';

export default class EmployeesPage extends Component {
  render() {
    const { open, handleOpenModal, handleCloseModal } = this.context;
    return (
      <>
        <div className="container">
          <button
            onClick={handleOpenModal}
            className="btn btn-success btn-block"
          >
            + Add employee
          </button>
        </div>
        <EmployeesList />
        <ModalWindow open={open} close={handleCloseModal}>
          <AddEmployeeForm close={handleCloseModal}></AddEmployeeForm>
        </ModalWindow>
      </>
    );
  }
}
EmployeesPage.contextType = ModalWindowContext;
