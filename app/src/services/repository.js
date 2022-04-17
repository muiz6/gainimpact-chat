import * as apiClient from 'services/api_client';
import * as webStorage from 'services/web_storage';

export async function signIn(username, password) {
  const response = await apiClient.postLogin(username, password);
  webStorage.saveToken(response.token);
  return response;
}

export async function signUp(user) {
  const response = await apiClient.postUser(user);
  webStorage.saveToken(response.token);
  return response;
}

export function isUserSignedIn() {
  return Boolean(webStorage.getToken());
}
