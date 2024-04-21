import HTTP from "./HTTP";
const { client } = HTTP;

const defaultFileUploadConfig = {
  headers: { "Content-Type": "multipart/form-data" },
};

const API = {
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

  me: {
    getMe: () => {
      const url = "/me";
      return client.get(url);
    },
  },
};

export default API;
