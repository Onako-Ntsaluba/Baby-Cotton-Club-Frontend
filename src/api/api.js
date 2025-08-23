import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8080" // Java Spring Boot backend
});

export default api;
