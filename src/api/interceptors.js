import axios from 'axios';
import { BASE_URL } from '../constants/url';
import { Cookie } from '../utils/cookie';

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
    console.dir(error);
    if (error.response.status === 401 && error.config.url !== 'refresh-token') {
      const [userError, user] = await api.get('refresh-token', {
        withCredentials: true,
      });
      console.log([userError, user]);
      if (!userError) {
        const { accessToken, refreshToken } = user.userData.tokens;
        localStorage.setItem('token', accessToken);
        Cookie.set('refreshToken', refreshToken, 30);
        return await api(error.config);
      } else {
        return [userError, null];
      }
    }

    return [error, null];
  }
);
