import axiosInstance from './axiosInstance';

export const login = (credentials) =>
  axiosInstance.post('/auth/login', credentials);

export const getMe = () =>
  axiosInstance.get('/auth/me');