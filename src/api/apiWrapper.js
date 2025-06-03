import axios from "axios";
// import config from "../configs/config.json";

// const { API_BASE_URL } = config;
const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:3000";
const headers = {
  "Content-Type": "application/json",
};
let options = {
  headers
};

const getAPIUrl = (url, origin) => {
  if(!origin){
    origin = API_BASE_URL;
  }

  return origin + url;
}

export const makeGetRequest = async (url, origin) => {
  return await axios.get(getAPIUrl(url, origin), options);
}

export const makePostRequest = async (url, data = {}, origin) => {
  return await axios.post(getAPIUrl(url, origin), data, options);
}

export const makePutRequest = async (url, data = {}, origin) => {
  return await axios.put(getAPIUrl(url, origin), data, options);
}

export const makeDeleteRequest = async (url, origin) => {
  return await axios.delete(getAPIUrl(url, origin), options);
}
