import axios from "axios";

const BASE_URL = "https://localhost:8000";

export const api = axios.create({
    baseURL: BASE_URL
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("jwt_token");
})