import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wat from '../img/wat.jpg';
import '../styles/NotFound.css';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <section className="section">
          <div className="container item-wrapper">
            <h1 className="item-title">
              404 Sorry, page not found:( <Link to="/">Go back</Link>
            </h1>
            <img
              className="item-img"
              width="1"
              height="1"
              loading="lazy"
              src={wat}
              alt="Not Found"
            />
          </div>
        </section>
      </>
    );
  }
}
