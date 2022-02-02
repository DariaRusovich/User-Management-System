import React, { Component } from 'react';
import DepartmentsList from '../components/DepartmentsList';
import ModalWindow from '../components/ModalWindow';
import { ModalWindowContext } from '../contexts/ModalWindowContext';
import AddDepartmentForm from '../modalForms/AddDepartmentForm';
import Footer from '../components/Footer';

export default class HomePage extends Component {
  render() {
    const { open, handleOpenModal, handleCloseModal } = this.context;
    return (
      <>
        <div className="container">
          <button
            onClick={handleOpenModal}
            className="btn btn-success btn-block"
          >
            + Add department
          </button>
        </div>
        <DepartmentsList />
        <Footer />
        <ModalWindow open={open} close={handleCloseModal}>
          <AddDepartmentForm close={handleCloseModal}></AddDepartmentForm>
        </ModalWindow>
      </>
    );
  }
}
HomePage.contextType = ModalWindowContext;
