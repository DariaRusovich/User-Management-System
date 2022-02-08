import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { apiRequest } from '../api/apiService';
import { AppContext } from '../contexts/AppContext';
import '../styles/Header.css';

export default class Header extends Component {
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
      <header className="header">
        <div className="container header-wrap">
          <h1 className="header-title title">
            <Link to="/">User management system</Link>
          </h1>
          {token && (
            <Link to="/login">
              {' '}
              <button onClick={this.signOut} className="btn btn-primary">
                Logout
              </button>
            </Link>
          )}
        </div>
      </header>
    );
  }
}
Header.contextType = AppContext;
