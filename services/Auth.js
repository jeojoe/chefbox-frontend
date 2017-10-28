import * as API from './API';

export function getToken() {
  return window.localStorage.getItem('@chefbox-token');
}

export function setToken(token) {
  return window.localStorage.setItem('@chefbox-token', token);
}

export async function login(email, password, settings) {
  return API.post('login', { email, password, ...settings });
}

export function register(email, password) {
  return API.post('register', {
    email, password,
  });
}
