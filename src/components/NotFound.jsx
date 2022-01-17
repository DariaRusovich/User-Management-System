import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import wat from '../img/wat.jpg';

export default class NotFound extends Component {
  render() {
    return (
      <>
        <section>
          <div className="container">
            <h1>
              404 Sorry, page not found:( <Link to="/">Go back</Link>
            </h1>
            <img src={wat} alt="Not Found" />
          </div>
        </section>
      </>
    );
  }
}
