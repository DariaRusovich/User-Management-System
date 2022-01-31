import React, { Component } from 'react';
import Error from '../components/Error';

const withError = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      error: null,
    };
    setError = (error) => {
        this.setState((prev) => ({ ...prev, error }))
    }
    render() {
      const { error } = this.state;
      return (
        <div>
          {error && <Error error={error} />}
          <OriginalComponent setError={this.setError} {...this.props} />
        </div>
      );
    }
  }
  return NewComponent;
};

export default withError;
