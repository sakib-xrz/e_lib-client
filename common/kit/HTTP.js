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

const HTTP = {
  client,
  defer,
  setClientToken,
};

export default HTTP;
