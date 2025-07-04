import axios from 'axios';

export const API_BASE_URL = "http://localhost:5454";

const api = axios.create({
  baseURL: API_BASE_URL,
});

// 👇 Add request interceptor to DYNAMICALLY get token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('jwt');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  config.headers['Content-Type'] = 'application/json';
  return config;
}, (error) => Promise.reject(error));

export default api;