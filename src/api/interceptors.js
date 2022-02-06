import axios from 'axios';
import { BASE_URL } from '../constants/url';

export const api = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json;charset=utf-8',
  },
});

api.interceptors.request.use(
  (config) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
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
  async (error) => {
    if (error.response.status === 401) {
      //const [userError, user] = await api.get('refresh-token');
      
    } 

    return [error, null];
  }
);
