const Storage = window.localStorage;
const AUTHENTICATION_STORAGE_KEY = 'PepperoniState:Authentication';

export function getAuthenticationToken() {
  return Storage.getItem(AUTHENTICATION_STORAGE_KEY);
}

export function setAuthenticationToken(token) {
  return Storage.setItem(AUTHENTICATION_STORAGE_KEY, token);
}

export function clearAuthenticationToken() {
  return Storage.removeItem(AUTHENTICATION_STORAGE_KEY);
}
