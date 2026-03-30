import axiosInstance from "./axiosInstance";
 
export const getExhibitions = () => axiosInstance.get("/exhibitions");
export const getExhibition = (id) => axiosInstance.get(`/exhibitions/${id}`);
export const createExhibition = (data) => axiosInstance.post("/exhibitions", data);
export const updateExhibition = (id, data) => axiosInstance.put(`/exhibitions/${id}`, data);
export const deleteExhibition = (id) => axiosInstance.delete(`/exhibitions/${id}`);