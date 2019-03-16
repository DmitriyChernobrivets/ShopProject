import axios from "axios";

const api = {
  get_filtered_products: (url, object) => axios.post(url, object)
};

export default api;
