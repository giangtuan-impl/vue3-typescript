import axios, { AxiosInstance } from "axios";

const service: AxiosInstance = axios.create({
  timeoutErrorMessage: "Request timeout",
  timeout: 30000,
  baseURL: "http://my-api.test",
  headers: {
    "Content-type": "application/json",
  },
});

service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default service;
