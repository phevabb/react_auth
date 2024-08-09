import axios from "axios";

axios.defaults.baseURL = "http://localhost:8000/api/";
axios.defaults.withCredentials = true;

let refresh = false;

axios.interceptors.response.use(
  (rep) => rep,
  async (error) => {
    if (error.response.status === 403 && !refresh) {
      refresh = true;

      const response = await axios.post("refresh/", {});

      if (response.status === 200) {
        const config = error.config;
        config.headers.Authorization = `Bearer ${response.data.access_token}`; // Assuming JWT token

        refresh = false;
        // Retry the original request with the updated authorization header:
        return axios(config);
      }
    }
  }
);
