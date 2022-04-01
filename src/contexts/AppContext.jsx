import React, { Component, createContext } from 'react';
import ModalWindow from '../components/ModalWindow';
import '../styles/Loader.scss';
export const AppContext = createContext();

export default class AppProvider extends Component {
  setState = this.setState.bind(this);
  state = {
    open: false,
    component: null,
    token: localStorage.getItem('token'),
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

  handleCloseModal = () => {
    this.setState({ open: false, component: null });
  };

  getToken = (result) => {
    this.setState({ token: result });
  };
  
  render() {
    const { open, component, token } = this.state;
    const { handleOpenModal, handleCloseModal, getToken } = this;
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{
          open,
          handleOpenModal,
          handleCloseModal,
          token,
          getToken,
        }}
      >
        <ModalWindow
          component={component}
          open={open}
          close={handleCloseModal}
        />

        {children}
      </AppContext.Provider>
    );
  }
}
