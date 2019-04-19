import axios from "axios";

const site = axios.create({
  headers: {
    "Content-Type": "application/json"
  }
});

site.interceptors.request.use(config => {
  const token = localStorage.getItem("token");
  config.headers.common["Authorization"] = token ? `${token}` : "";

  return config;
});

const api = {
  defaultAuth: () => site.get("/users/auth"),
  login: payload => site.post("/users/auth/login", payload),
  createUser: payload => site.post("/users/create", payload),

  getProducts: (url, payload) => site.post(url, payload),
  getProductById: url => site.post(url),
  Search: (url, payload) => site.post(`${url}/search`, payload),

  getFeedbackItems: id => site.get(`/feedback?id=${id}`),
  sendFeedback: payload => site.post("/feedback", payload)
};
export default api;
