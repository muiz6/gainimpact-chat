const BASE_URL = '/api';

async function myFetch(endpoint, { body, method }) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: method ?? 'GET',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (response.status < 200 || response.status > 299) {
    throw response.statusText;
  }
  return response.json();
}

export function postLogin(username, password) {
  return myFetch('/users/login', {
    method: 'POST',
    body: { username, password },
  });
}

export async function postUser(user) {
  return myFetch('/users', {
    method: 'POST',
    body: user,
  });
}
