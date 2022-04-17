import * as apiClient from 'services/api_client';
import * as webStorage from 'services/web_storage';

export const signUp = apiClient.postUser;

export async function signIn(username, password) {
  const response = await apiClient.postLogin(username, password);
  webStorage.saveToken(response.token);
  return response;
}

export function isUserSignedIn() {
  return Boolean(webStorage.getToken());
}

export function signOut() {
  webStorage.deleteToken();
}

export function getChatPg() {
  const token = webStorage.getToken();
  return apiClient.getChatPg(token);
}
