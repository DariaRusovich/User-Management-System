import { React, Component } from 'react';
import Department from './Department';

export default class DepartmentsList extends Component {
  render() {
    return (
      <div>
        <Department></Department>
        <Department></Department>
        <Department></Department>
      </div>
    );
  }
}
