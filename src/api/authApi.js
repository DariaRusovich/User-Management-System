import { LOGIN_URL, LOGOUT_URL } from '../constants/url';
import { ApiRequest } from './apiService';

class AuthApi {
  signIn(data) {
    return ApiRequest.post(LOGIN_URL, data);
  }
  signOut() {
    return ApiRequest.post(LOGOUT_URL);
  }
}

export default new AuthApi();
