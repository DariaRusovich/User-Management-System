import React, { Component } from 'react';
import Loader from '../components/Loader';

const withLoader = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      isLoading: false,
    };
    handleToggleLoader = () => {
      this.setState((prev) => ({ ...prev, isLoading: !prev.isLoading }));
    };
    render() {
      const { isLoading } = this.state;
      return (
        <div>
          {isLoading && <Loader />}
          <OriginalComponent
            handleToggleLoader={this.handleToggleLoader}
            {...this.props}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default withLoader;
