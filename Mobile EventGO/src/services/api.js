import axios from "axios";

const api = axios.create({
  baseURL: "exp://192.168.15.69:3333",
});

export default api;
