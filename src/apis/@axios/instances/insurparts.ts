import axios from "axios";

const insurpartsInstance = axios.create({
  baseURL: "https://api-dev.insurparts.com/api",
  headers: { "Content-type": "application/json" },
});

export default insurpartsInstance;
