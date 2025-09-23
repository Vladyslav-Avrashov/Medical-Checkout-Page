import axios from "axios";

const API_BASE_URL = "https://medical-checkout-page-backend.onrender.com";

const apiClient = axios.create({
  baseURL: API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
