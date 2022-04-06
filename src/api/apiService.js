import { api } from './interceptors';

export default class ApiService {
  constructor(baseApiUrl) {
    this.baseApiUrl = baseApiUrl;
  }
  get(url, params = {}) {
    return api.get(`${this.baseApiUrl}/${url}`, { params });
  }
  post(url, data) {
    return api.post(`${this.baseApiUrl}/${url}`, data);
  }
  patch(url, data) {
    return api.patch(`${this.baseApiUrl}/${url}`, data);
  }
  delete(url) {
    return api.delete(`${this.baseApiUrl}/${url}`);
  }
}

export const ApiRequest = new ApiService(

);
