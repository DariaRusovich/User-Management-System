import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000/api/v1',
  headers: {
    'Content-type': 'application/json;charset=utf-8',
    Authorization: 21333,
  },
});

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
