import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { AppContext } from '../contexts/AppContext';
import '../styles/Header.css';

export default class Header extends Component {
  render() {
    const { token } = this.context;

    return (
      <header className="header">
        <div className="container header-wrap">
          <h1 className="header-title title">
            <Link to="/">User management system</Link>
          </h1>
          {token && (
            <button className="btn btn-primary">
              <Link to="/login">Logout</Link>
            </button>
          )}
        </div>
      </header>
    );
  }
}
Header.contextType = AppContext;
