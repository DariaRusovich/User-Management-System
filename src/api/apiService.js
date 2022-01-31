import {
  DEPARTMENT_BY_ID_URL,
  DEPARTMENTS_URL,
  LOGIN,
  EMPLOYEES_URL,
} from '../constants/url';
import { api } from './interceptors';

export default class apiService {
  getDepartments() {
    return api.get(DEPARTMENTS_URL);
  }
  getEmployeesByDepartmentId(id) {
    return api.get(`${DEPARTMENT_BY_ID_URL}${id}${EMPLOYEES_URL}`);
  }
  signin(loginData) {
    return api.post(LOGIN, loginData);
  }
}

export const apiRequest = new apiService();
