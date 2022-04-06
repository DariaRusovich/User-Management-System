import { LOGIN_URL, LOGOUT_URL } from '../constants/url';
import ApiService from './apiService';

class AuthApi {
  constructor(){
    this.apiLogin = new ApiService(LOGIN_URL)
    this.apiLogout = new ApiService(LOGOUT_URL)
  }
  signIn(data) {
    return this.apiLogin.post('', data);
  }
  signOut() {
    return this.apiLogout.post('');
  }
}

export default new AuthApi();
