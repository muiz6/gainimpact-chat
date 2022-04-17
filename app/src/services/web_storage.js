const KEY_TOKEN = 'token';

export function saveToken(token) {
  localStorage.setItem(KEY_TOKEN, token);
}

export function getToken() {
  localStorage.getItem(KEY_TOKEN);
}
