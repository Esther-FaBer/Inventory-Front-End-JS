import axiosInstance from "./axiosInstance";
 
export const login = (credentials) =>
  axiosInstance.post("/auth/login", credentials);
 
export const logout = () =>
  axiosInstance.post("/auth/logout");
 
export const getMe = () =>
  axiosInstance.get("/auth/me");