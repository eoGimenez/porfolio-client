import axios from 'axios';
export default class AuthService {
  constructor() {
    this.API_URL = axios.create({
      baseURL: `${import.meta.env.VITE_API_URL}/auth`,
    });
    this.API_URL.interceptors.request.use((config) => {
      const storedToken = localStorage.getItem('authToken');

      if (storedToken) {
        config.headers = { Authorisation: `Bearer ${storedToken}` };
      }
      return config;
    });
  }

  signUp(req) {
    return this.API_URL.post('/signup', req);
  }

  login(req) {
    return this.API_URL.post('/login', req);
  }

  verify() {
    return this.API_URL.get('/verify');
  }
}
