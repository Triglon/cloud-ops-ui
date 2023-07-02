import axios from 'axios';
import { redirectIfUnauthorized } from '../routes/routes';

const core_axios = axios.create({
  baseURL: process.env.REACT_APP_CORE_API || 'http://localhost:8000/api/v1',
  // timeout: 1000,
  headers: { 'Content-Type': 'application/json' }
});

core_axios.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

core_axios.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    if (error.response) {
      error.response.success = false;
    } else {
      error.response = { success: false, error: 'no response from server' };
    }
    console.log('axios error', error.response);

    if (error?.response?.status === 401) {
      // core_axios.defaults.headers.common['Authorization'] = '';
      // core_axios.defaults.headers.common['token'] = '';
      // localStorage.removeItem('token')
      redirectIfUnauthorized();
    }

    return error.response.data;
  }
);

export default core_axios;
