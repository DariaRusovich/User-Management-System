import { DEPARTMENTS_URL, EMPLOYEES_URL } from '../constants/url';
import ApiService from './apiService';

class EmployeesApi {
  constructor() {
    this.apiDepartment = new ApiService(DEPARTMENTS_URL);
    this.api = new ApiService(EMPLOYEES_URL);
  }
  get(id) {
    return this.apiDepartment.get(`${id}${EMPLOYEES_URL}`);
  }
  getOne(id) {
    return this.api.get(id);
  }
  add(data) {
    return this.api.post('', data);
  }
  delete(id) {
    return this.api.delete(id);
  }
  update(id, data) {
    return this.api.patch(id, data);
  }
}

export default new EmployeesApi();
