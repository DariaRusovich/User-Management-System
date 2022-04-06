import ApiService from './apiService';
import { DEPARTMENTS_URL } from '../constants/url';

class DepartmentApi {
  constructor() {
    this.api = new ApiService(DEPARTMENTS_URL);
  }
  get(params) {
    return this.api.get('', params);
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

export default new DepartmentApi();
