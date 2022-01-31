import React, { Component } from 'react';

const withValidation = (OriginalComponent) => {
  class NewComponent extends Component {
    state = {
      inputDirty: false,
      inputFirstNameDirty: false,
      inputLastNameDirty: false,
      inputUserNameDirty: false,
      inputEmailDirty: false,
      passwordDirty: false,
    };
    handleChange = (event) => {
      switch (event.target.name) {
        case 'name':
          this.setState({ inputDirty: true });
          break;
        case 'username':
          this.setState({ inputUserNameDirty: true });
          break;
        case 'firstname':
          this.setState({ inputFirstNameDirty: true });
          break;
        case 'lasttname':
          this.setState({ inputLastNameDirty: true });
          break;
        case 'email':
          this.setState({ inputEmailDirty: true });
          break;
        case 'password':
          this.setState({ passwordDirty: true });
          break;
        default:
          this.setState({ inputDirty: false, passwordDirty: false });
      }
    };
    render() {
      const {
        inputDirty,
        passwordDirty,
        inputFirstNameDirty,
        inputLastNameDirty,
        inputUserNameDirty,
        inputEmailDirty,
      } = this.state;
      return (
        <OriginalComponent
          inputDirty={inputDirty}
          inputFirstNameDirty={inputFirstNameDirty}
          inputLastNameDirty={inputLastNameDirty}
          inputUserNameDirty={inputUserNameDirty}
          inputEmailDirty={inputEmailDirty}
          passwordDirty={passwordDirty}
          handleChange={this.handleChange}
          {...this.props}
        />
      );
    }
  }
  return NewComponent;
};

export default withValidation;
