import React, { Component } from 'react';
import wat from '../img/wat.jpg'


export default class NotFound extends Component {
  render() {
    return (
      <>
     <section>
       <div className='container'>
         <img src={wat} alt="Not Found" />
       </div>
     </section>
      </>
    );
  }
}
