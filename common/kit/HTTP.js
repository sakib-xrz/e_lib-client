import axios from "axios";
import { AUTH_TOKEN_KEY } from "../helpers/KeyChain";

let client = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

const setTokenAndRedirect = async (token, redirect = () => {}) => {
  try {
    client.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    redirect();
    return client;
  } catch (error) {
    console.error("Error setting authorization token:", error);
    throw error;
  }
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
  setTokenAndRedirect,
};

export default HTTP;
