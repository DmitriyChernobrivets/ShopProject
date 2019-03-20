import axios from "axios";

axios.defaults.headers["x-access-token"] = localStorage.getItem("token") || "QUEST TOKEN";

const api = {
  auth: payload => axios.post("/users/auth", payload),
  getProducts: (url, payload) => axios.post(url, payload)
};

export default api;
