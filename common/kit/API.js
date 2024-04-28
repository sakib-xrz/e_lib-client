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

    updateProfilePicture: (payload) => {
      const url = "/me/profile-picture";
      return client.patch(url, payload, defaultFileUploadConfig);
    },

    changePassword: (payload) => {
      const url = "/me/change-password";
      return client.patch(url, payload);
    },
  },
};

export default API;
