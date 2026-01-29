import axios from "axios";

const api = axios.create({
  baseURL: "https://staging.bcpl-t20.com",
  timeout: 10000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",

    // IMPORTANT headers
    Referer: "https://staging.bcpl-t20.com",
    Origin: "https://staging.bcpl-t20.com",
  },
});

export default api;
