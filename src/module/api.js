import axios from "axios";

axios.defaults.headers["x-access-token"] = localStorage.getItem("token") || "GUEST";

const api = {
  defaultAuth: () => axios.get("/users/auth"),
  auth: payload => axios.post("/users/auth/login", payload),
  getProducts: (url, payload) => axios.post(url, payload)
};

export default api;
