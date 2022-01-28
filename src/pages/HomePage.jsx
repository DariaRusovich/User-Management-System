import React, { Component } from 'react';
import DepartmentsList from '../components/DepartmentsList';
import { AppConsumer } from '../context/AppContext';

export default class HomePage extends Component {
  render() {
    return (
      <AppConsumer>
        {([appData, appDataSetter]) => (
          <>
            <DepartmentsList appDataSetter={appDataSetter} />
          </>
        )}
      </AppConsumer>
    );
  }
}
