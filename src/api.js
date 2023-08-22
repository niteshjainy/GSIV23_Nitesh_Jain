import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/",
  timeout: 3000,
  headers: {
    Authorization: `Bearer ${process.env.REACT_APP_Auth_Token}`,
    accept: "application/json",
  },
});

export default api;
