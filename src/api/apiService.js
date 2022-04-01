import { api } from './interceptors';

 class ApiService {
  get(url, params = {}){
    return api.get(url, { params });
  }
  post(url, data){
    return api.post(url, data);
  }
  patch(url, data){
    return api.patch(url, data);
  }
  delete(url){
    return api.delete(url);
  }
}

export const ApiRequest = new ApiService();
