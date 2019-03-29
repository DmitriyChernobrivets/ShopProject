import axios from "axios";
axios.defaults.headers["x-access-token"] = localStorage.getItem("token") || "GUEST";
const api = {
  defaultAuth: () => {
    axios.defaults.headers["x-access-token"] = localStorage.getItem("token") || "GUEST";
    return axios.get("/users/auth");
  },
  auth: payload => axios.post("/users/auth/login", payload),
  createUser: payload => axios.post("/users/create", payload),

  getProducts: (url, payload) => axios.post(url, payload),

  getFeedbackItems: id => axios.get(`/feedback?id=${id}`),
  sendFeedback: payload => axios.post("/feedback", payload)
};

export default api;
