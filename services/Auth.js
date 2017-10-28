import * as API from './API';

export function getToken() {
  return window.localStorage.getItem('@chefbox-token');
}

// hack hia
export function setEmail(email) {
  return window.localStorage.setItem('@chefbox-email', email);
}

export async function login(email, password, settings) {
  return API.post('login', { email, password, ...settings });
}

export function register(email, password) {
  return API.post('register', {
    email, password,
  });
}
