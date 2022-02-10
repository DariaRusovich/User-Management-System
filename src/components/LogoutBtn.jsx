import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import { AppContext } from '../contexts/AppContext';

export default class LogoutBtn extends Component {
  signOut = async () => {
    const [statusError, status] = await apiRequest.logout();
    if (status) {
      this.context.getToken('');
      localStorage.removeItem('token');
    } else {
      alert(statusError.response.data.message);
    }
  };
  render() {
    const { token } = this.context;
    return (
      <>
        {token && (
          <Link to="/login">
            {' '}
            <button onClick={this.signOut} className="btn btn-primary">
              Logout
            </button>
          </Link>
        )}
      </>
    );
  }
}

LogoutBtn.contextType = AppContext;
