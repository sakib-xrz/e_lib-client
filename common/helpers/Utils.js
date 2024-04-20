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

export const setTokenAndRedirect = async (token, redirect = () => {}) => {
  try {
    const client = await API.setClientToken(token);
    localStorage.setItem(AUTH_TOKEN_KEY, token);
    HTTP.defer.resolve(client);
    redirect();
  } catch (error) {
    console.error(error);
  }
};
