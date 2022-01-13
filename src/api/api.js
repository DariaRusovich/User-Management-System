import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
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
  return api.get('/departments');
}
export async function getDepartmentById(id) {
  return api.get(`/departments/${id}`);
}

// export async function getEmployeeByDepartmentId(id) {
//   return api.get(`/departments/${id}/employees`);
// }
export async function signin(loginData) {
  return api.post('/login', loginData);
}
