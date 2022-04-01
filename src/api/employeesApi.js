import { DEPARTMENTS_URL, EMPLOYEES_URL } from '../constants/url';
import { ApiRequest } from './apiService';

class EmployeesApi {
  get(id) {
    return ApiRequest.get(`${DEPARTMENTS_URL}/${id}${EMPLOYEES_URL}`);
  }
  getOne(id) {
    return ApiRequest.get(`${EMPLOYEES_URL}/${id}`);
  }
  add(data) {
    return ApiRequest.post(EMPLOYEES_URL, data);
  }
  delete(id) {
    return ApiRequest.delete(`${EMPLOYEES_URL}/${id}`);
  }
  update(id, data) {
    return ApiRequest.patch(`${EMPLOYEES_URL}/${id}`, data);
  }
}

export default new EmployeesApi();
