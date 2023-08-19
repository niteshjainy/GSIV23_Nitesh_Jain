import axios from "axios";
// const token =
//   "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5NjI2YjkzZTcyODBjZTZiY2JmMzc2YWZlMWU2ODU1NiIsInN1YiI6IjY0ZTBhNDUyMzcxMDk3MDBmZmJhMzgwZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.z70PBR3ABtekpk8YaRSCBkd8IQde3yGC35ipV6eAb58";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3/movie/",
  timeout: 3000,
  headers: {
    // Authorization: `Basic ${token}`,
    accept: "application/json",
  },
});

export default api;
