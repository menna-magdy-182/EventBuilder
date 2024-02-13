import axios from 'axios';
import {BASE_URL} from 'constants/constant';

// Create an instance of Axios
const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

// Request interceptor
axiosInstance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    __DEV__ && console.error('Request Interceptor Error:', error);
    return Promise.reject(error);
  },
);

// Response interceptor
axiosInstance.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    return Promise.reject(error);
  },
);

export default axiosInstance;
