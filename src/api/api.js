import axios from "axios";

export const Client = axios.create({
  baseURL: "localhost:5000/api/",
});
