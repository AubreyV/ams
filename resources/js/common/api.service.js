import Vue from "vue";
import axios from "axios";
import JwtService from "./jwt.service";
import { API_URL } from "./config";

const ApiService = {
  init() {
    Vue.use(axios);
    axios.defaults.baseURL = API_URL;
  },

  setHeader() {

    axios.defaults.headers.common[
      "Authorization"
    ] = `${JwtService.getToken()}`;
  },

  query(resource, params) {
    return axios.get(resource, params).catch(error => {
    });
  },

  get(resource, slug = "") {
    return axios.get(`${resource}/${slug}`).catch(error => {
    });
  },

  post(resource, params) {
    return axios.post(`${resource}`, params);
  },

  update(resource, slug, params) {
    return axios.put(`${resource}/${slug}`, params);
  },

  put(resource, params) {
    return axios.put(`${resource}`, params);
  },

  delete(resource) {
    return axios.delete(resource).catch(error => {
    });
  }
};

export default ApiService;
