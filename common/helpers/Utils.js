import API from "../kit/API";
import HTTP from "../kit/HTTP";
import { AUTH_TOKEN_KEY } from "./KeyChain";

export function deferred() {
  let _deferred = {};
  _deferred.promise = new Promise(function (resolve, reject) {
    _deferred.resolve = resolve;
    _deferred.reject = reject;
  });
  return _deferred;
}

export const setJWTokenAndRedirect = async (token, redirect = () => {}) => {
  try {
    const client = await API.setClientToken(token);
    const authToken =
      client.defaults.headers.common["Authorization"].split(" ")[1];
    localStorage.setItem(AUTH_TOKEN_KEY, authToken);
    HTTP.defer.resolve(client);
    redirect();
  } catch (error) {
    console.error(error);
  }
};
