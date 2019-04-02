import axios from "axios";
axios.defaults.headers["x-access-token"] = localStorage.getItem("token") || "GUEST";

axios.defaults.headers.common = {
  "Content-Type": "application/json",
  Accept: "application/json"
};

const site = axios.create({ baseURL: "http://localhost:3003" });

site.interceptors.response.use(
  res => {
    return res;
  },
  err => {
    console.log(err);
  }
);

const api = {
  defaultAuth: () => {
    site.defaults.headers["x-access-token"] = localStorage.getItem("token") || "GUEST";
    return axios.get("/users/auth");
  },
  auth: payload => axios.post("/users/auth/login", payload),
  createUser: payload => axios.post("/users/create", payload),

  getProducts: (url, payload) => axios.post(url, payload),
  getProductById: url => axios.get(url),

  getFeedbackItems: id => axios.get(`/feedback?id=${id}`),
  sendFeedback: payload => axios.post("/feedback", payload)
};

export default api;
