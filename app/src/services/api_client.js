const BASE_URL = '/api';

async function myFetch(endpoint, { body, headers, method }) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    method: method ?? 'GET',
    headers: { 'Content-Type': 'application/json', ...headers },
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

export function getChatPg(token) {
  return myFetch('/chat_pg', {
    headers: { Authorization: `Bearer ${token}` },
  });
}

export function getMessages(token, userId) {
  return myFetch(`/messages/${userId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
}
