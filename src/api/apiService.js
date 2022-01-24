import { DEPARTMENT_BY_ID_URL, DEPARTMENTS_URL, LOGIN } from '../constants/url';
import { api } from './interceptors';

export default class apiService {
  getDepartments() {
    return api.get(DEPARTMENTS_URL);
  }
  getDepartmentById(id) {
    return api.get(`${DEPARTMENT_BY_ID_URL}${id}`);
  }
  signin(loginData) {
    return api.post(LOGIN, loginData);
  }
}

export const apiRequest = new apiService();
