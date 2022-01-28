import React, { Component, createContext } from 'react';
import '../styles/Loader.css';

const AppContext = createContext();
export const AppConsumer = AppContext.Consumer;

export default class AppProvider extends Component {
  constructor(props) {
    super(props);
    this.setState = this.setState.bind(this);
    this.state = {
      visibility: false,
    };
  }
  handleOpenModal = (e) => {
    e.preventDefault();
    this.setState({ visibility: true });
  };
  handleCloseModal = (e) => {
    e.preventDefault();
    this.setState({ visibility: false });
  };

  render() {
    console.log('App context', this.state);
    const { children } = this.props;
    return (
      <AppContext.Provider value={[this.state, this.setState]}>
        {children}
      </AppContext.Provider>
    );
  }
}
