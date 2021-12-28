import { React, Component } from 'react';
import wat from '../img/wat.jpg';
import './Error.css'
export default class Error extends Component {
  render() {
    return (
      <div className='error-img-wrap'>
        <img
          className="error-img"
          width="1"
          height="1"
          loading="lazy"
          src={wat}
          alt="Not Found"
        />
      </div>
    );
  }
}
