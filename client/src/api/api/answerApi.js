import {ApiClient} from "../config";

export const answerApi = {
  getAnswers: (payload) => {
    return ApiClient.post("/answer/getAnswers", payload);
  },
};
