import React, { Component } from 'react';
import DepartmentsList from '../components/DepartmentsList';
import AppProvider, { AppContext } from '../contexts/ModalWindowContext';

//import { AppConsumer } from '../context/AppContext';



export default class HomePage extends Component {
  render() {
    return (
      // <AppConsumer>
      //   {([appData, appDataSetter]) => (
          <AppProvider>
            <DepartmentsList  />
          </AppProvider>
        //)}
      // </AppConsumer>
    );
  }
}
