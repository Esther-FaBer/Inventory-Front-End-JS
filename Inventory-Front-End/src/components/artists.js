import axiosInstance from "./axiosInstance";

export const getArtists = () => axiosInstance.get("/artists");
export const getArtist = (id) => axiosInstance.get(`/artists/${id}`);
export const createArtist = (data) => axiosInstance.post("/artists", data);
export const updateArtist = (id, data) => axiosInstance.put(`/artists/${id}`, data);
export const deleteArtist = (id) => axiosInstance.delete(`/artists/${id}`);