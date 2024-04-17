import HTTP from "./HTTP";
const { client } = HTTP;

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const API = {
  setClientToken: HTTP.setClientToken,

  auth: {
    register: (payload) => {
      const url = "/auth/register";
      return client.post(url, payload);
    },

    login: (payload) => {
      const url = "/auth/login";
      return client.post(url, payload);
    },
  },
};

export default API;
