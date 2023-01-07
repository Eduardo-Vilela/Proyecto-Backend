import axios from "axios";

//const BASE_URL = "";
const BASE_URL = "http://localhost:8080/home";

const apiInstance = axios.create({ baseURL: BASE_URL });

apiInstance.interceptors.request.use((request) => {
  request.headers = {
    Authorization: `Bearer ` + localStorage.getItem("token"),
  };
  return request;
});

apiInstance.interceptors.response.use(
  (response) => response,
  (err) => {
    if (err.response.data.message === "Expired JWT Token") {
      localStorage.clear();
      window.location = "/";
    }
    
    return Promise.reject(err.response.data);
  }
);

export default apiInstance;