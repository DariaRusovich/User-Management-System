import React, { Component, createContext } from 'react';
import '../styles/Loader.css';

export const AppContext = createContext();
//export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  setState = this.setState.bind(this);
  state = {
    visible: false,
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
    console.log('App context', this.state);
    const { visible } = this.state;
    const { handleOpenModal, handleCloseModal } = this;
    const { children } = this.props;
    return (
      <AppContext.Provider
        value={{ visible, handleOpenModal, handleCloseModal }}
      >
        {children}
      </AppContext.Provider>
    );
  }
}

