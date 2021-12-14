import {ApiClient} from "../config";

export const blogApi = {
  createBlog: (payload) => {
    return ApiClient.get("api/post", payload);
  },
};
