import React, { Component } from 'react';
import Loader from '../components/Loader';

const withLoader = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      isLoading: false,
    };
    toggleLoader = () => {
      this.setState((prev) => ({ ...prev, isLoading: !prev.isLoading }));
    };
    render() {
      const { isLoading } = this.state;
      return (
        <div>
          {isLoading && <Loader />}
          <OriginalComponent
            toggleLoader={this.toggleLoader}
            {...this.props}
          />
        </div>
      );
    }
  }
  return NewComponent;
};

export default withLoader;
