import axios from 'axios';
import httpInterceptor from './httpInterceptor';

const BASE_URL = 'http://localhost:8080';

const httpClient = axios.create({
  baseURL: BASE_URL,
  timeout: 10000
});

const interceptor = httpClient.interceptors;

const setupInterceptors = () => {
  httpInterceptor(interceptor);
};

setupInterceptors();

export default httpClient;