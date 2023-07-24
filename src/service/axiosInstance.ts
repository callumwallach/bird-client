import axios from "axios";
import { BIRDHOUSE_ADMIN_API_URL } from "../helper/constants";

const axiosInstance = axios.create({
  baseURL: BIRDHOUSE_ADMIN_API_URL,
});

export default axiosInstance;
