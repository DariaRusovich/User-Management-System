import { ApiRequest } from './apiService';
import { DEPARTMENTS_URL } from '../constants/url';

class DepartmentApi {
  get(params) {
    return ApiRequest.get(DEPARTMENTS_URL, params);
  }
  getOne(id) {
    return ApiRequest.get(`${DEPARTMENTS_URL}/${id}`);
  }
  add(data) {
    return ApiRequest.post(DEPARTMENTS_URL, data);
  }
  delete(id) {
    return ApiRequest.delete(`${DEPARTMENTS_URL}/${id}`);
  }
  update(id, data) {
    return ApiRequest.patch(`${DEPARTMENTS_URL}/${id}`, data);
  }
}

export default new DepartmentApi();
