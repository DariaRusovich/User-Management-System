import React, { Component, createContext } from 'react';
import { apiRequest } from '../api/apiService';
import ModalWindow from '../components/ModalWindow';
import '../styles/Loader.css';

export const ModalWindowContext = createContext();

export default class ModalWindowProvider extends Component {
  setState = this.setState.bind(this);
  state = {
    open: false,
    component: null,
  };

  componentDidMount = () => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.setState({ open: false });
      }
    });
  };

  handleOpenModal = (component) => {
    this.setState({ open: true, component });
  };
  // const modals = {
  //   first: (name) => console.log('HERE IS', name),
  //   second: (name) => console.log('HERE IS SECOND', name)
  // }

  // const openModal = (name, modalKey) => {
  //     return modals[modalKey](name)
  // }

  // openModal("HEllo", 'second')
  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({ open: false, component: null });
  };

  render() {
    const { open, component } = this.state;
    const { handleOpenModal, handleCloseModal } = this;
    const { children } = this.props;

    return (
      <ModalWindowContext.Provider
        value={{
          open,
          handleOpenModal,
          handleCloseModal
        }}
      >
        <ModalWindow
          component={component}
          open={open}
          close={handleCloseModal}
        />

        {children}
      </ModalWindowContext.Provider>
    );
  }
}
