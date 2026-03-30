import axiosInstance from "./axiosInstance";
 
export const getArtworks = () => axiosInstance.get("/artworks");
export const getArtwork = (id) => axiosInstance.get(`/artworks/${id}`);
export const createArtwork = (data) => axiosInstance.post("/artworks", data);
export const updateArtwork = (id, data) => axiosInstance.put(`/artworks/${id}`, data);
export const deleteArtwork = (id) => axiosInstance.delete(`/artworks/${id}`);