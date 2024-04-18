import axios from "axios";

import { deferred } from "../helpers/Utils";

let client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

const defer = new deferred();

const setClientToken = (token) => {
  try {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    defer.resolve(client);
  } catch (error) {
    defer.reject(error);
  }
  return defer.promise;
};

client.interceptors.response.use(
  function (response) {
    const responseObject = {
      success: true,
      statusCode: response?.data?.statusCode || 200,
      message: response?.data?.message || "Request successful",
      meta: response?.data?.meta || null,
      data: response?.data?.result,
    };
    return responseObject;
  },
  function (error) {
    const errorResponse = {
      success: false,
      message: error.response?.data?.message || "An error occurred",
      errorMessages: error.response?.data?.errorMessages || [],
    };
    return Promise.reject(errorResponse);
  }
);

const HTTP = {
  client,
  defer,
  setClientToken,
};

export default HTTP;
