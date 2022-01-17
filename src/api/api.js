import axios from 'axios';
import {
  BASE_URL,
  DEPARTMENT_BY_ID_URL,
  DEPARTMENTS_URL,
  LOGIN,
} from '../constants/url';

const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = localStorage.getItem('token');
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return [null, response.data];
  },
  (error) => {
    return [error, null];
  }
);

export async function getDepartments() {
  return api.get(DEPARTMENTS_URL);
}
export async function getDepartmentById(id) {
  return api.get(`${DEPARTMENT_BY_ID_URL}${id}`);
}

// export async function getEmployeeByDepartmentId(id) {
//   return api.get(`/departments/${id}/employees`);
// }
export async function signin(loginData) {
  return api.post(LOGIN, loginData);
}
