import {ApiClient} from "../config";

export const productApi = {
  product: (payload) => {
    return ApiClient.post("api/product", payload);
  },
  getAllProduct: () => {
    return ApiClient.get("api/product");
  },
};
