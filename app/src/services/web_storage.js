const KEY_TOKEN = 'token';

export function saveToken(token) {
  localStorage.setItem(KEY_TOKEN, token);
}

export function getToken() {
  return localStorage.getItem(KEY_TOKEN);
}

export function deleteToken() {
  localStorage.removeItem(KEY_TOKEN);
}
