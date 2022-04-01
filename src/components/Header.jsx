import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Header.scss';
import LogoutBtn from './LogoutBtn';

export default class Header extends Component {
  render() {
    return (
      <header className="header">
        <div className="container header-wrap">
          <h1 className="header-title title">
            <Link to="/">User management system</Link>
          </h1>
          <LogoutBtn />
        </div>
      </header>
    );
  }
}
