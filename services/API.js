import axios from 'axios';
import config from '../config';

function genConfig(c) {
  const token = window.localStorage.getItem('@chefbox-token');
  return {
    withCredential: true,
    headers: {
      'Content-Type': 'application/json',
      Authorization: token || '',
    },
    ...c,
  };
}

export function get(entry) {
  return axios.get(`${config.prod.FUNCTIONS_URL}/${entry}`);
}

export function post(entry, body, c) {
  const completeConfig = genConfig(c);
  return axios.post(`${config.prod.FUNCTIONS_URL}/${entry}`, body, { withCredential: true });
}

export function put(entry, body, c) {
  const completeConfig = genConfig(c);
  return axios.post(`${config.prod.FUNCTIONS_URL}/${entry}`, body, completeConfig);
}

export function del(entry, body, c) {
  const completeConfig = genConfig(c);
  return axios.delete(`${config.prod.FUNCTIONS_URL}/${entry}`, body, completeConfig);
}
