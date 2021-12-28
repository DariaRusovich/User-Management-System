import { React, Component } from 'react';

export default class Department extends Component {
  render() {
    return (
      <div className="department-item">
        <img
          className="department-img"
          src="#"
          alt="Avatar"
          width="1"
          height="1"
          loading="lazy"
        />
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quo
          recusandae quae voluptatem quibusdam culpa cum cumque sunt corporis?
          Praesentium, corporis!
        </p>
        <button>Delete</button>
        <button>Edit</button>
        <button>Employees</button>
      </div>
    );
  }
}
