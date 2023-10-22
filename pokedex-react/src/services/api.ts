import axios from "axios";

export const api = axios.create({
  baseURL: "https://localhost:7107/api"
})