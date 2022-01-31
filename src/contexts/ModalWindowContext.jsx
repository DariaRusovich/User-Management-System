import React, { Component, createContext } from 'react';
import '../styles/Loader.css';

export const ModalWindowContext = createContext();

export default class ModalWindowProvider extends Component {
  setState = this.setState.bind(this);
  state = {
    open: false,
  };

  componentDidMount = () => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.setState({ open: false });
      }
    });
  };

  handleOpenModal = (e) => {
    e.preventDefault();
    this.setState({ open: true });
  };
  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({ open: false });
  };

  render() {
    const { open } = this.state;
    const { handleOpenModal, handleCloseModal } = this;
    const { children } = this.props;
    return (
      <ModalWindowContext.Provider
        value={{ open, handleOpenModal, handleCloseModal }}
      >
        {children}
      </ModalWindowContext.Provider>
    );
  }
}
