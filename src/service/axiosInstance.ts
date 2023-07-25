import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BIRDHOUSE_ADMIN_API_URL,
});

export default axiosInstance;
