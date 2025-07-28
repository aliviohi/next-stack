export const parsedCookies = (cookieHeader: string): Record<string, string> =>
  cookieHeader.split('; ').reduce((acc: Record<string, string>, cookie) => {
    const [name, ...rest] = cookie.split('=');
    acc[name] = rest.join('=');
    return acc;
  }, {});

// Set a cookie with optional expiration
export const setCookie = (name: string, value: string, days: number = 7): void => {
  const expires = new Date();
  expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000);
  document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Strict`;
};

// Get a cookie value
export const getCookie = (name: string): string | null => {
  if (typeof document === 'undefined') return null;

  const nameEQ = name + '=';
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
};

// Remove a cookie
export const removeCookie = (name: string): void => {
  document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 UTC;path=/;`;
};

// Get authentication token from cookie
export const getAuthToken = (): string | null => {
  return getCookie('auth_token');
};

// Set authentication token in cookie
export const setAuthToken = (token: string): void => {
  setCookie('auth_token', token, 30); // 30 days expiration
};

// Remove authentication token from cookie
export const removeAuthToken = (): void => {
  removeCookie('auth_token');
};
