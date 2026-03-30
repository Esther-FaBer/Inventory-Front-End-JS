import axiosInstance from "./axiosInstance";
 
export const getGalleries = () => axiosInstance.get("/galleries");
export const getGallery = (id) => axiosInstance.get(`/galleries/${id}`);
export const createGallery = (data) => axiosInstance.post("/galleries", data);
export const updateGallery = (id, data) => axiosInstance.put(`/galleries/${id}`, data);
export const deleteGallery = (id) => axiosInstance.delete(`/galleries/${id}`);