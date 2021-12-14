import { ApiClient } from "../config";

export const authApi = {
  login: (payload) => {
    return ApiClient.post("api/auth/login", payload);
  },
  register: (payload) => {
    return ApiClient.post("api/auth/register", payload)
  },
  getUserFromToken: (payload) => {
    return ApiClient.get("api/auth/get-user-from-token", payload)
  }
  //   getProductById: (payload) => {
  //     return ApiClient.get(`/products/${payload.id}`);
  //   },
  //   createProduct: (payload) => {
  //     return ApiClient.post("/products", payload);
  //   },
  //   updateProduct: (payload) => {
  //     return ApiClient.put(`/products/${payload.id}`, payload);
  //   },
  //   deleteProduct: (payload) => {
  //     return ApiClient.delete(`/products/${payload.id}`);
  //   },
};
