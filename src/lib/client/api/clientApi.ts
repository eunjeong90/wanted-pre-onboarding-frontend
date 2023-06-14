import axios from "axios";

const BASE = `https://www.pre-onboarding-selection-task.shop`;

const clientApi = axios.create({
  baseURL: BASE,
  headers: {
    contentType: "application/json",
  },
});

clientApi.interceptors.request.use(function (config) {
  const token = localStorage.getItem("access_token");
  config.headers["Authorization"] = `Bearer ${token}`;
  return config;
});

export default clientApi;
