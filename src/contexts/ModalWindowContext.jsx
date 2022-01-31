import React, { Component, createContext } from 'react';
import '../styles/Loader.css';

export const ModalWindowContext = createContext();

export default class ModalWindowProvider extends Component {
  setState = this.setState.bind(this);
  state = {
    visible: false,
  };

  componentDidMount = () => {
    window.addEventListener('keyup', (e) => {
      if (e.key === 'Escape') {
        this.setState({ visible: false });
      }
    });
  };

  handleOpenModal = (e) => {
    e.preventDefault();
    this.setState({ visible: true });
  };
  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({ visible: false });
  };

  render() {
    const { visible } = this.state;
    const { handleOpenModal, handleCloseModal } = this;
    const { children } = this.props;
    return (
      <ModalWindowContext.Provider
        value={{ visible, handleOpenModal, handleCloseModal }}
      >
        {children}
      </ModalWindowContext.Provider>
    );
  }
}
