import axios from "axios";

const api = axios.create({
    baseURL: "https://desafiofullstack-fredrook-production.up.railway.app",
  timeout: 5000,
});

export default api;
