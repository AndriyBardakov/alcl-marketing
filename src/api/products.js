import {
  makeGetRequest,
  makePostRequest,
  makePutRequest,
  makeDeleteRequest,
} from "./apiWrapper";

export const getProducts = async (params) => {
  return await makeGetRequest(`/products`, params);
}