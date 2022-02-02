import {
  DEPARTMENT_BY_ID_URL,
  DEPARTMENTS_URL,
  LOGIN,
  EMPLOYEES_URL,
} from '../constants/url';
import { api } from './interceptors';

export default class apiService {
  getDepartments(limit=10, page=1) {
    return api.get(`${DEPARTMENTS_URL}?limit=${limit}&page=${page}`);
  }
  getEmployeesByDepartmentId(id) {
    return api.get(`${DEPARTMENT_BY_ID_URL}${id}${EMPLOYEES_URL}`);
  }
  addDepartment(departmentData) {
    return api.post(DEPARTMENTS_URL, departmentData);
  }
  addEmployee(employeeData) {
    return api.post(EMPLOYEES_URL, employeeData);
  }
  deleteDepartment(id) {
    return api.delete(`${DEPARTMENT_BY_ID_URL}${id}`);
  }
  deleteEmployee(id) {
    return api.delete(`${EMPLOYEES_URL}/${id}`);
  }
  signin(loginData) {
    return api.post(LOGIN, loginData);
  }
}

export const apiRequest = new apiService();
